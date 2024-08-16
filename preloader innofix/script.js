gsap.fromTo(
  ".loading-page",
  { opacity: 2 },
  {
    opacity: 0,
    display: "none",
    duration: 3.5,
    delay: 4,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);
