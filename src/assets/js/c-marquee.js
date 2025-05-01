// 1. Инициализация Swiper
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
    modifier: 2.01,
    scale: 0.96,
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
  const slides = document.querySelectorAll('.c-marquee__inner .swiper-slide');
  
  slides.forEach(slide => {
    // Проверяем, является ли слайд активным
    if (slide.classList.contains('swiper-slide-active')) {
      gsap.to(slide, { opacity: 1, duration: 0.3 });
    } else {
      gsap.to(slide, { opacity: 0.6, duration: 0.3 }); // Можно изменить значение opacity
    }
  });
}

// 3. Настройка GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const totalSlides = document.querySelectorAll('.c-marquee__inner .swiper-slide').length;

gsap.to({}, {
  scrollTrigger: {
    trigger: ".p-home__section-marquee",
    start: "top 90",
    end: "+=8000",
    scrub: 2,
    pin: true,
    onUpdate: self => {
      const progress = Math.min(0.999, self.progress);
      const slideIndex = Math.floor(progress * totalSlides);
      swiper.slideToLoop(slideIndex);
    }
  }
});