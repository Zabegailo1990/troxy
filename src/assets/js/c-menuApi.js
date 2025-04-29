$(document).ready(function () {
    $('body').on('click', '.c-menu-api__link', function (e) {
        if ($(this).closest('.c-menu-api__sublist').length) {
            e.stopPropagation();
            return;
        }

        e.preventDefault();

        const $currentSublist = $(this).closest('.c-menu-api__item').find('.c-menu-api__sublist');
        const $currentIcon = $(this).closest('.c-menu-api__row').find('.c-menu-api__icon');

        const isActive = $currentIcon.hasClass('c-menu-api__icon--active');

        // Закрываем все открытые sublist, кроме текущего
        $('.c-menu-api__sublist').not($currentSublist).slideUp(200);
        $('.c-menu-api__icon').removeClass('c-menu-api__icon--active');

        if (isActive) {
            $currentSublist.slideUp(200);
        } else {
            $currentIcon.addClass('c-menu-api__icon--active');
            $currentSublist.slideToggle(200);
        }
    });
});
