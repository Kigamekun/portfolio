import { AnimatePresence, motion } from "framer-motion";
import type { MouseEvent as ReactMouseEvent } from "react";
import { flushSync } from "react-dom";
import { useEffect, useRef, useState } from "react";

import { dataNavbar } from "../../constants";

type ThemeMode = "light" | "dark";
type ViewTransitionLike = {
  finished: Promise<void>;
};

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const themeAnimationCleanupRef = useRef<(() => void) | null>(null);

  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastHero(window.scrollY > window.innerHeight * 0.62);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = dataNavbar
      .map(({ navigate_url }) => document.getElementById(navigate_url))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible?.target.id) {
          setActiveNav(visible.target.id);
        }
      },
      {
        rootMargin: "-42% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      themeAnimationCleanupRef.current?.();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const top = element.getBoundingClientRect().top + window.scrollY - 96;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActiveNav(sectionId);
    setIsMenuOpen(false);
  };

  const toggleTheme = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const nextTheme: ThemeMode = isDark ? "light" : "dark";
    const root = document.documentElement;
    const documentWithTransition = document as Document & {
      startViewTransition?: (callback: () => void) => ViewTransitionLike;
    };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const currentTheme = root.dataset.theme === "dark" ? "dark" : "light";
    const applyTheme = () => {
      root.dataset.theme = nextTheme;
      localStorage.setItem("theme", nextTheme);
      flushSync(() => {
        setTheme(nextTheme);
      });
    };

    themeAnimationCleanupRef.current?.();

    if (reduceMotion) {
      applyTheme();
      return;
    }

    const target = event.currentTarget.getBoundingClientRect();
    const originX = event.clientX || target.left + target.width / 2;
    const originY = event.clientY || target.top + target.height / 2;
    const revealRadius =
      Math.hypot(
        Math.max(originX, window.innerWidth - originX),
        Math.max(originY, window.innerHeight - originY)
      ) + 2;

    root.style.setProperty("--theme-origin-x", `${originX}px`);
    root.style.setProperty("--theme-origin-y", `${originY}px`);
    root.style.setProperty("--theme-reveal-radius", `${revealRadius}px`);

    if (documentWithTransition.startViewTransition) {
      const cleanup = () => {
        root.classList.remove("theme-instant", "theme-view-transition");
        root.style.removeProperty("--theme-origin-x");
        root.style.removeProperty("--theme-origin-y");
        root.style.removeProperty("--theme-reveal-radius");

        if (themeAnimationCleanupRef.current === cleanup) {
          themeAnimationCleanupRef.current = null;
        }
      };

      themeAnimationCleanupRef.current = cleanup;
      root.classList.add("theme-instant", "theme-view-transition");

      const transition = documentWithTransition.startViewTransition(() => {
        applyTheme();
      });

      transition.finished.finally(cleanup);
      return;
    }

    const snapshotOverlay = document.createElement("div");
    snapshotOverlay.className = "theme-snapshot-overlay";
    snapshotOverlay.dataset.snapshotTheme = currentTheme;
    snapshotOverlay.style.background = getComputedStyle(document.body).background;
    snapshotOverlay.style.colorScheme = currentTheme;
    snapshotOverlay.style.setProperty("--theme-origin-x", `${originX}px`);
    snapshotOverlay.style.setProperty("--theme-origin-y", `${originY}px`);
    snapshotOverlay.style.setProperty("--theme-hole-radius", "0px");

    const inheritedThemeVars = [
      "--bg",
      "--bg-strong",
      "--surface",
      "--surface-strong",
      "--surface-muted",
      "--line",
      "--line-strong",
      "--text",
      "--muted",
      "--muted-strong",
      "--accent",
      "--accent-soft",
      "--shadow-soft",
      "--shadow-strong",
      "--radius-xl",
      "--radius-lg",
    ];

    const rootStyles = getComputedStyle(root);
    inheritedThemeVars.forEach((variableName) => {
      snapshotOverlay.style.setProperty(variableName, rootStyles.getPropertyValue(variableName));
    });

    const fixedLayer = document.createElement("div");
    fixedLayer.className = "theme-snapshot-fixed-layer";

    const scrollLayer = document.createElement("div");
    scrollLayer.className = "theme-snapshot-scroll-layer";
    scrollLayer.style.transform = `translateY(-${window.scrollY}px)`;

    Array.from(document.body.children).forEach((child) => {
      if (child === snapshotOverlay || child.classList.contains("theme-snapshot-overlay")) {
        return;
      }

      const element = child as HTMLElement;

      if (element.id === "theme-transition-overlay") {
        return;
      }

      const clone = element.cloneNode(true) as HTMLElement;
      clone.querySelectorAll("#theme-transition-overlay").forEach((node) => node.remove());

      if (getComputedStyle(element).position === "fixed") {
        fixedLayer.appendChild(clone);
      } else {
        scrollLayer.appendChild(clone);
      }
    });

    snapshotOverlay.append(fixedLayer, scrollLayer);
    document.body.appendChild(snapshotOverlay);

    let isCleaned = false;
    let revealAnimation: Animation | null = null;

    const cleanup = () => {
      if (isCleaned) {
        return;
      }

      isCleaned = true;
      revealAnimation?.cancel();
      snapshotOverlay.remove();
      root.classList.remove("theme-instant");
      root.style.removeProperty("--theme-origin-x");
      root.style.removeProperty("--theme-origin-y");
      root.style.removeProperty("--theme-reveal-radius");

      if (themeAnimationCleanupRef.current === cleanup) {
        themeAnimationCleanupRef.current = null;
      }
    };

    themeAnimationCleanupRef.current = cleanup;
    root.classList.add("theme-instant");
    applyTheme();

    requestAnimationFrame(() => {
      revealAnimation = snapshotOverlay.animate(
        [
          {
            opacity: 1,
            transform: "translateZ(0) scale(1)",
            ["--theme-hole-radius" as string]: "0px",
          },
          {
            opacity: 1,
            transform: "translateZ(0) scale(1)",
            ["--theme-hole-radius" as string]: `${revealRadius * 0.24}px`,
            offset: 0.18,
          },
          {
            opacity: 1,
            transform: "translateZ(0) scale(1)",
            ["--theme-hole-radius" as string]: `${revealRadius * 0.72}px`,
            offset: 0.68,
          },
          {
            opacity: 1,
            transform: "translateZ(0) scale(1)",
            ["--theme-hole-radius" as string]: `${revealRadius}px`,
          },
        ],
        {
          duration: 980,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards",
        }
      );

      revealAnimation.onfinish = cleanup;
      revealAnimation.oncancel = () => {
        snapshotOverlay.remove();
      };
    });
  };

  const navShellClass = isScrolledPastHero
    ? isDark
      ? "bg-[rgba(12,14,18,0.82)] border border-white/10 backdrop-blur-xl"
      : "bg-[rgba(255,251,245,0.88)] border border-black/[0.05] backdrop-blur-xl"
    : "bg-transparent";

  const brandNameClass = isScrolledPastHero ? (isDark ? "text-[#f3eee7]" : "text-[#111315]") : isDark ? "text-[#111315]" : "text-white";
  const brandRoleClass = isScrolledPastHero ? (isDark ? "text-white/58" : "text-[#666b66]") : isDark ? "text-[#6b6f76]" : "text-white/60";
  const inactiveNavClass = isScrolledPastHero
    ? isDark
      ? "text-white/72 hover:bg-white/6 hover:text-white"
      : "text-[#4d534d] hover:bg-[rgba(94,75,245,0.05)] hover:text-[#111315]"
    : isDark
      ? "text-[#111315] hover:bg-black/[0.05]"
      : "text-white hover:bg-white/6";
  const mobileButtonClass = isScrolledPastHero
    ? isDark
      ? "bg-white/[0.06] text-white"
      : "bg-white/60 text-[#111315]"
    : isDark
      ? "bg-black/[0.05] text-[#111315]"
      : "bg-white/[0.04] text-white";
  const mobileSheetClass = isDark
    ? "absolute left-3 right-3 top-[92px] rounded-[30px] border border-white/10 bg-[rgba(12,14,18,0.95)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
    : "absolute left-3 right-3 top-[92px] rounded-[30px] border border-black/10 bg-[rgba(255,251,245,0.95)] p-5 shadow-[0_24px_80px_rgba(15,17,19,0.16)]";

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-5"
      >
        <div
          className={`mx-auto flex w-full max-w-[1220px] items-center justify-between gap-4 rounded-[28px] px-4 py-3 transition-all duration-300 md:px-5 ${navShellClass}`}
        >
          <button
            type="button"
            className="flex cursor-pointer items-center gap-3"
            onClick={() => scrollToSection("home")}
          >
            <span className="grid h-11 w-11 place-items-center rounded-[18px] bg-[rgb(94,75,245)] text-sm font-bold tracking-[0.16em] text-white">
              RS
            </span>
            <div className="hidden min-w-0 text-left sm:block">
              <p className={`truncate text-left text-sm font-extrabold tracking-tight ${brandNameClass}`}>
                Reksa Prayoga Syahputra
              </p>
              <p className={`truncate text-left text-xs font-medium ${brandRoleClass}`}>
                Fullstack Developer
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {dataNavbar.map(({ id, navigate, navigate_url }) => (
              <button
                key={id}
                type="button"
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeNav === navigate_url
                    ? "bg-[rgb(94,75,245)] text-white"
                    : inactiveNavClass
                }`}
                onClick={() => scrollToSection(navigate_url)}
              >
                {navigate}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition duration-200 ${
                isScrolledPastHero
                  ? isDark
                    ? "bg-white/[0.06] text-white hover:bg-white/[0.1]"
                    : "bg-black/[0.04] text-[#111315] hover:bg-black/[0.06]"
                  : isDark
                    ? "bg-black/[0.05] text-[#111315] hover:bg-black/[0.08]"
                    : "bg-white/[0.04] text-white hover:bg-white/[0.08]"
              }`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 2.5V5.2M12 18.8V21.5M21.5 12H18.8M5.2 12H2.5M18.72 5.28L16.8 7.2M7.2 16.8L5.28 18.72M18.72 18.72L16.8 16.8M7.2 7.2L5.28 5.28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20.2 14.1A8.3 8.3 0 0 1 9.9 3.8a9.1 9.1 0 1 0 10.3 10.3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[rgb(94,75,245)] px-5 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
              onClick={() => scrollToSection("contact")}
            >
              Let&apos;s talk
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${mobileButtonClass}`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 2.5V5.2M12 18.8V21.5M21.5 12H18.8M5.2 12H2.5M18.72 5.28L16.8 7.2M7.2 16.8L5.28 18.72M18.72 18.72L16.8 16.8M7.2 7.2L5.28 5.28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20.2 14.1A8.3 8.3 0 0 1 9.9 3.8a9.1 9.1 0 1 0 10.3 10.3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-bold ${mobileButtonClass}`}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(17,19,21,0.2)] backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22 }}
              className={mobileSheetClass}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={`mb-5 border-b pb-4 ${isDark ? "border-white/10" : "border-black/8"}`}>
                <div>
                  <p className={`text-sm font-extrabold tracking-tight ${isDark ? "text-white" : "text-[#111315]"}`}>Reksa Prayoga Syahputra</p>
                  <p className={`text-xs font-medium ${isDark ? "text-white/56" : "text-[#666b66]"}`}>Portfolio navigation</p>
                </div>
              </div>

              <div className="grid gap-2">
                {dataNavbar.map(({ id, navigate, navigate_url }) => (
                  <button
                    key={id}
                    type="button"
                    className={`cursor-pointer rounded-[20px] px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                      activeNav === navigate_url
                        ? "bg-[rgb(94,75,245)] text-white"
                        : isDark
                          ? "bg-white/[0.04] text-white hover:bg-white/[0.08]"
                          : "bg-black/[0.03] text-[#111315] hover:bg-[rgba(94,75,245,0.05)]"
                    }`}
                    onClick={() => scrollToSection(navigate_url)}
                  >
                    {navigate}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
