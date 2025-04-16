gsap.registerPlugin(ScrollTrigger);

gsap.to(".body__header", {
    top: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".present__header",
        start: "top top",
        end: "+=90",
        scrub: true,
    }
});