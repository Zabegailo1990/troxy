gsap.registerPlugin(ScrollTrigger);

const triggerElement = document.querySelector(".s-present__header") || document.querySelector(".header__page");

gsap.to(".body__header", {
    top: 0,
    ease: "none",
    scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});