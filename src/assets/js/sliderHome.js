$(document).ready(function(){
    $('.slider-home__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slider-home__button--prev'),
        nextArrow: $('.slider-home__button--next'),
        infinite: false,
    });
});