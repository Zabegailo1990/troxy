gsap.timeline({
    scrollTrigger: {
        scrub: 1.5, 
        trigger: ".home__benefits",
        start: "top top",
        end: "4000px",
        pin: true,
    }
})
.fromTo(
    gsap.utils.toArray(".home__card-benefit"), 
    { 
        y: "100vh",
        x: "-100vw"
    },
    { 
        y: (index) => index * 44,
        x: (index) => index * -30,
        duration: 3,
        stagger: 2,
        ease: "power1.out"
    }
);
