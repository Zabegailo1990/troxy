const cards = gsap.utils.toArray(".home__card-benefit");

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home__benefits",
        start: "top top",
        end: "4000px",
        pin: true,
        scrub: true,
        markers: true
    }
});

cards.forEach((card) => {
    tl.to(card, {
        onStart: () => card.classList.add("home__card-benefit--active"),
        onReverseComplete: () => card.classList.remove("home__card-benefit--active")
    });
});


