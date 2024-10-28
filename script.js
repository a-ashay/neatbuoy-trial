// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Timeline for scroll-dependent animations
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top", 
    end: "bottom+=200%", 
    scrub: 1, 
    pin: true, 
  }
});

// Circle animation - moves out of viewport
tl.to(".left-circle", {
  x: "-80vw",
  ease: "none", 
});

tl.to(".right-circle", {
  x: "80vw",
  ease: "none", 
}, "<");

// Triangle animation - moves up and expands
tl.to(".triangle", {
  y: "-80vh", 
  ease: "power1.out", 
}, "<");

tl.to(".triangle", {
  scale: 20, 
  ease: "power2.inOut", 
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

