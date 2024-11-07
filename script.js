// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 767;

  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".container",
          start: "top top", 
          end: "bottom+=200%", 
          scrub: 1, 
          pin: true, 
      }
  });

  // Circle animation - adjusted based on screen size
  tl.to(".left-circle", {
      x: isMobile ? "-40vw" : "-80vw",
      ease: "none", 
  });

  tl.to(".right-circle", {
      x: isMobile ? "40vw" : "80vw",
      ease: "none", 
  }, "<");

  // Triangle animation - adjusted based on screen size
  tl.to(".triangle", {
      y: isMobile ? "-40vh" : "-80vh", 
      ease: "power1.out", 
  }, "<");

  tl.to(".triangle", {
      scale: isMobile ? 10 : 20, 
      ease: "power2.inOut", 
  });
});

// Target all <p> elements inside the .other section
gsap.from(".other p", {
  opacity: 0,
  y: 20, // Optional: adds a slight upward animation
  duration: 1,
  stagger: 1.5, 
  scrollTrigger: {
    trigger: ".other",
    start: "top center", 
  },
});

