var tl = gsap.timeline();
tl.from("#page1", {
  y: "100vh",
  duration: 1,
  delay: 1,
});
tl.to("#page1", {
  y: "0vh",
  scale: 1,
  duration: 0.8,
  rotate: 360,
});
