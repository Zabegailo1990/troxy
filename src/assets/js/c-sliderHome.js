const sliderHome = new Swiper('.c-slider-home', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: true,
    // autoHeight: true,
    navigation: {
        nextEl: '.c-panel__button--next',
        prevEl: '.c-panel__button--prev',
    },
});