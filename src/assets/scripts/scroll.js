const tweens = document.querySelectorAll('.tween');
const trigger = document.querySelector('.start');
const triggerRect = trigger.getBoundingClientRect();

const START = 0;
const MIDDLE = 200;
const END = 400;

const start = triggerRect.top - window.scrollY - MIDDLE;
const end = start + END;

const inSceneStart = scrollY => start <= scrollY;
const inSceneEnd = scrollY => end >= scrollY;

const updateTransform = value => {
  const opacity = value / END;  // Mengatur opacity berdasarkan posisi scroll
  const scale = 0.7 + (value / END) * 0.3;  // Interpolasi scale dari 0.7 ke 1
  const translateY = -120 + (value / END) * 120;  // Interpolasi translateY dari -120px ke 0px
  const rotateX = 25 - (value / END) * 25;  // Interpolasi rotateX dari 25deg ke 0deg
  const rotateY = -10 + (value / END) * 10;  // Interpolasi rotateY dari -10deg ke 0deg

  tweens[0].style.opacity = 0.2 + (value / END) * 0.8;  // Interpolasi opacity dari 0.2 ke 1
  tweens[0].style.transform = `perspective(1200px) translateX(0px) translateY(${translateY}px) scale(${scale}) rotate(0deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0px)`;
}

const updateScroll = () => {
  const scrollY = window.scrollY;
  const pos = Math.min(400, Math.max(0, scrollY - start));
  updateTransform(pos);
}

window.addEventListener('scroll', updateScroll, {passive: true});