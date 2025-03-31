$(document).ready(function(){
    // Проверяем ширину экрана при загрузке
    if (window.innerWidth >= 1440) {
        initSlickSlider();
    }

    // Также проверяем при изменении размера окна
    $(window).on('resize', function() {
        if (window.innerWidth >= 1440) {
            // Если слайдер еще не инициализирован - инициализируем
            if (!$('.slider-news__slider').hasClass('slick-initialized')) {
                initSlickSlider();
            }
        } else {
            // Если слайдер инициализирован - уничтожаем его
            if ($('.slider-news__slider').hasClass('slick-initialized')) {
                $('.slider-news__slider').slick('unslick');
            }
        }
    });

    function initSlickSlider() {
        $('.slider-news__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.slider-news__button--prev'),
            nextArrow: $('.slider-news__button--next'),
            infinite: false,
            variableWidth: true,
            // centerMode: true,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false,
                    }
                }
            ]
        });
    }
});