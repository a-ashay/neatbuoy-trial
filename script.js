// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Define breakpoints for responsive animations
  gsap.matchMedia().add("(max-width: 767px)", () => {
    // Animations specifically for mobile screens

    // Create the timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top top", 
        end: "bottom+=200%", 
        scrub: 1, 
        pin: true,
      }
    });

    // Adjusted animations for mobile
    tl.to(".left-circle", { x: "-50vw", ease: "none" });
    tl.to(".right-circle", { x: "50vw", ease: "none" }, "<");
    tl.to(".triangle", { y: "-80vh", ease: "power1.out" }, "<");
    tl.to(".triangle", { scale: 8, ease: "power2.inOut" }); // Mobile scale value
  });

  // Default animations for screens larger than 767px
  gsap.matchMedia().add("(min-width: 768px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top top", 
        end: "bottom+=200%", 
        scrub: 1, 
        pin: true,
      }
    });

    // Adjusted animations for larger screens
    tl.to(".left-circle", { x: "-80vw", ease: "none" });
    tl.to(".right-circle", { x: "80vw", ease: "none" }, "<");
    tl.to(".triangle", { y: "-80vh", ease: "power1.out" }, "<");
    tl.to(".triangle", { scale: 20, ease: "power2.inOut" }); // Larger screen scale value
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

