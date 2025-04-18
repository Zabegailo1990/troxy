$(document).ready(function() {
    // Инициализация - закрываем все аккордеоны
    $('.c-card-vacancies__bottom').each(function() {
        $(this).data('height', $(this).outerHeight()).css({
            'max-height': '0',
            'overflow': 'hidden',
            'transition': 'max-height 0.4s ease'
        });
    });

    // Обработчик клика
    $('.c-card-vacancies__top').click(function() {
        const cardInner = $(this).closest('.card__inner');
        const content = cardInner.find('.c-card-vacancies__bottom');
        const icon = $(this).find('.c-card-vacancies__icon');
        const cardVacancies = $(this).closest('.c-card-vacancies'); // <-- Родительский элемент

        // Если текущий открыт - закрываем
        if (content.hasClass('c-card-vacancies__bottom--active')) {
            content.removeClass('c-card-vacancies__bottom--active').css('max-height', '0');
            icon.removeClass('c-card-vacancies__icon--active');
            cardVacancies.removeClass('c-card-vacancies--active'); // <-- Удаляем класс
        } 
        // Если закрыт - открываем
        else {
            // Закрываем все
            $('.c-card-vacancies__bottom.c-card-vacancies__bottom--active')
                .removeClass('c-card-vacancies__bottom--active')
                .css('max-height', '0')
                .closest('.c-card-vacancies')
                .removeClass('c-card-vacancies--active'); // <-- Удаляем у других

            $('.c-card-vacancies__icon.c-card-vacancies__icon--active').removeClass('c-card-vacancies__icon--active');

            // Открываем текущий
            content.addClass('c-card-vacancies__bottom--active').css('max-height', content.data('height'));
            icon.addClass('c-card-vacancies__icon--active');
            cardVacancies.addClass('c-card-vacancies--active'); // <-- Добавляем класс
        }
    });

    // Блокируем всплытие клика по контенту
    $('.c-card-vacancies__bottom').click(function(e) {
        e.stopPropagation();
    });
});
