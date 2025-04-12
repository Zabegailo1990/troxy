gsap.registerPlugin(ScrollTrigger);

gsap.to(".header", {
    top: 0,
    ease: "none",
    scrollTrigger: {
        start: "top top",
        end: "+=50",
        scrub: true,
    }
});