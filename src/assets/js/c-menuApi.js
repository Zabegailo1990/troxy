$(document).ready(function() {
    $('.c-menu-api__link').click(function(e) {
        if ($(this).closest('.c-menu-api__sublist').length) {
            e.stopPropagation();
            return;
        }
        
        e.preventDefault();
        
        let $currentSublist = $(this).closest('.c-menu-api__item').find('.c-menu-api__sublist');
        let $currentIcon = $(this).closest('.c-menu-api__row').find('.c-menu-api__icon');

        let isActive = $currentIcon.hasClass('c-menu-api__icon--active');

        // Закрываем все открытые sublist, кроме текущего
        $('.c-menu-api__sublist').not($currentSublist).slideUp(200);
        $('.c-menu-api__icon').removeClass('c-menu-api__icon--active');

        // Если иконка уже активна, просто убираем класс и не открываем sublist
        if (isActive) {
            $currentSublist.slideUp(200);
        } else {
            $currentIcon.addClass('c-menu-api__icon--active');
            $currentSublist.slideToggle(200);
        }
    });
});