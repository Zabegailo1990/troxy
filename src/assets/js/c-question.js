$(document).ready(function () {
    // Инициализация - закрываем все аккордеоны
    $('.c-question__bottom').each(function () {
        $(this).data('height', $(this).outerHeight()).css({
            'max-height': '0',
            'overflow': 'hidden',
            'transition': 'max-height 0.4s ease'
        });
    });

    // Делегированный обработчик клика по .c-question__top
    $('body').on('click', '.c-question__top', function () {
        const cardInner = $(this).closest('.c-question');
        const content = cardInner.find('.c-question__bottom');
        const icon = $(this).find('.c-question__icon');
        const title = $(this).find('.c-question__title');
        const cardVacancies = $(this).closest('.c-question');

        if (content.hasClass('c-question__bottom--active')) {
            content.removeClass('c-question__bottom--active').css('max-height', '0');
            icon.removeClass('c-question__icon--active');
            title.removeClass('c-question__title--active');
            cardVacancies.removeClass('c-question--active');
        } else {
            // Закрываем все
            $('.c-question__bottom.c-question__bottom--active')
                .removeClass('c-question__bottom--active')
                .css('max-height', '0')
                .closest('.c-question')
                .removeClass('c-question--active');

            $('.c-question__icon.c-question__icon--active').removeClass('c-question__icon--active');
            $('.c-question__title.c-question__title--active').removeClass('c-question__title--active');

            // Открываем текущий
            content.addClass('c-question__bottom--active').css('max-height', content.data('height'));
            icon.addClass('c-question__icon--active');
            title.addClass('c-question__title--active');
            cardVacancies.addClass('c-question--active');
        }
    });

    // Делегированное блокирование всплытия клика по .c-question__bottom
    $('body').on('click', '.c-question__bottom', function (e) {
        e.stopPropagation();
    });
});
