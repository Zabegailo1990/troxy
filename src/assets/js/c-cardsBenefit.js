const mm = gsap.matchMedia();

const tl = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        trigger: ".s-benefits",
        start: "top 90",
        end: "4000",
        pin: true,
    }
});

const animatedCards = document.querySelectorAll(".s-benefits__card-benefit:not(:first-child)");

// Используем matchMedia только для выбора X
mm.add("(min-width: 1441px)", () => tl.vars.x = "-100vw"); 
mm.add("(max-width: 1440px)", () => tl.vars.x = "0"); 

tl.fromTo(animatedCards, 
    { y: "100vh", x: tl.vars.x }, // X адаптируется
    { y: 0, x: 0, duration: 3, stagger: 2, ease: "power1.out" }
);
