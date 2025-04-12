$(document).ready(function(){
    // Проверяем ширину экрана при загрузке
    if (window.innerWidth >= 1440) {
        initSlickSlider();
    }

    // Также проверяем при изменении размера окна
    $(window).on('resize', function() {
        if (window.innerWidth >= 1440) {
            // Если слайдер еще не инициализирован - инициализируем
            if (!$('.c-slider-articles__inner').hasClass('slick-initialized')) {
                initSlickSlider();
            }
        } else {
            // Если слайдер инициализирован - уничтожаем его
            if ($('.c-slider-articles__inner').hasClass('slick-initialized')) {
                $('.c-slider-articles__inner').slick('unslick');
            }
        }
    });

    function initSlickSlider() {
        $('.c-slider-articles__inner').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.slider-news__button--prev'),
            nextArrow: $('.slider-news__button--next'),
            infinite: false,
            variableWidth: true,
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