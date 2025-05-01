const slides = gsap.utils.toArray('.c-marquee__card');
const totalSlides = slides.length; 

const swiper = new Swiper('.c-marquee', {
    effect: 'coverflow',
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    speed: 400,
    coverflowEffect: {
        rotate: 0,
        stretch: -30,
        depth: 100,
        modifier: 1.3,
        scale: 0.95,
        slideShadows: false,
    },
    on: {
        init: function() {
            updateSlideOpacity();
        },
        slideChangeTransitionStart: function() {
            updateSlideOpacity();
        },
        slideChangeTransitionEnd: function() {
            updateSlideOpacity();
        }
    }
});

function updateSlideOpacity() {
    slides.forEach(slide => {
        const currentSlide = slide.classList.contains('swiper-slide-active');
        gsap.to(slide, { 
            opacity: currentSlide ? 1 : 0.6,
            duration: 0.3,
        });
    });
}

gsap.to({}, {
    scrollTrigger: {
        trigger: ".p-home__section-marquee",
        start: "top 90",
        end: "+=8000",
        scrub: 2,
        pin: true,
        onUpdate: self => {
        const progress = self.progress;
        const slideIndex = Math.floor(progress * totalSlides);
        swiper.slideToLoop(slideIndex);
        }
    }
});