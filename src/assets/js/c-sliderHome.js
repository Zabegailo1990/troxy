$(document).ready(function(){
    $('.c-slider-home__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.c-panel__button--prev'),
        nextArrow: $('.c-panel__button--next'),
        infinite: false,
    });
});