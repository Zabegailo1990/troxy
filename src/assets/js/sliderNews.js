const sliderArticle = new Swiper('.c-slider-articles', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
        nextEl: '.c-slider-articles__button--next',
        prevEl: '.c-slider-articles__button--prev',
    },
    loop: false,
    allowTouchMove: true,
    breakpoints: {
        375: {
            freeMode: true,
            slidesOffsetBefore: 24,
            slidesOffsetAfter: 24,
        },
        780: {
            slidesOffsetBefore: 40,
            slidesOffsetAfter: 40,
        },
        1440: {
            freeMode: false,
            slidesPerView: 3,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
        }
    }
});