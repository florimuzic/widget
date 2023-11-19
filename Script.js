gsap.to(".plane", {
  duration: 20,
  repeat: 12,
  repeatDelay: 0,
  ease: "none",
  motionPath: {
    path: "#mask-path",
    align: "#mask-path",
    autoRotate: 25,
    alignOrigin: [0.5, 0.49]
  }
});

const tl = gsap.timeline();

tl.fromTo(
  "#mask-path",
  { drawSVG: "0%" },
  { drawSVG: "100%", duration: 20, delay: 0.12, ease: "none" }
);
