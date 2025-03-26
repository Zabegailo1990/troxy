gsap.timeline({
    scrollTrigger: {
        scrub: true,
        trigger: ".home__benefits",
        start: "top top",
        end: "4000px",
        pin: true,
    }
})
.fromTo(".home__card-benefit", 
    { 
        y: "100vh",
        x: "-100vw" 
    },
    { 
        y: 0,
        x: 0,
        duration: 3,
        stagger: 2,
        ease: "power1.out"
    }
);