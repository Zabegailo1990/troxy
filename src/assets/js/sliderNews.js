$(document).ready(function(){
    $('.slider-news__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slider-news__prev'),
        nextArrow: $('.slider-news__next'),
        infinite: false,
    });
});