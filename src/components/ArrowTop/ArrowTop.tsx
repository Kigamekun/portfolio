import { useEffect, useState } from "react";

const ArrowTop: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={goTop}
      className="floating-top-button fixed bottom-6 right-4 z-40 hidden rounded-full px-4 py-3 text-sm font-bold backdrop-blur md:inline-flex"
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 11L12 5L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default ArrowTop;
