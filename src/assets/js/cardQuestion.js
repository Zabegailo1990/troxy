$(document).ready(function() {
    // Инициализация - закрываем все аккордеоны
    $('.question__bottom').each(function() {
        $(this).data('height', $(this).outerHeight()).css({
            'max-height': '0',
            'overflow': 'hidden',
            'transition': 'max-height 0.4s ease'
        });
    });

    // Обработчик клика
    $('.question__top').click(function() {
        const cardInner = $(this).closest('.question');
        const content = cardInner.find('.question__bottom');
        const icon = $(this).find('.question__icon');
        const title = $(this).find('.question__title');
        const cardVacancies = $(this).closest('.question'); // <-- Родительский элемент

        // Если текущий открыт - закрываем
        if (content.hasClass('question__bottom--active')) {
            content.removeClass('question__bottom--active').css('max-height', '0');
            icon.removeClass('question__icon--active');
            title.removeClass('question__title--active');
            cardVacancies.removeClass('question--active');
        } 
        // Если закрыт - открываем
        else {
            // Закрываем все
            $('.question__bottom.question__bottom--active')
                .removeClass('question__bottom--active')
                .css('max-height', '0')
                .closest('.question')
                .removeClass('question--active');

            $('.question__icon.question__icon--active').removeClass('question__icon--active');
            $('.question__title.question__title--active').removeClass('question__title--active');

            // Открываем текущий
            content.addClass('question__bottom--active').css('max-height', content.data('height'));
            icon.addClass('question__icon--active');
            title.addClass('question__title--active');
            cardVacancies.addClass('question--active');
        }
    });

    // Блокируем всплытие клика по контенту
    $('.question__bottom').click(function(e) {
        e.stopPropagation();
    });
});
