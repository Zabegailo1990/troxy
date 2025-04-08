$(document).ready(function() {
    // Инициализация - закрываем все аккордеоны
    $('.card-vacancies__bottom').each(function() {
        $(this).data('height', $(this).outerHeight()).css({
            'max-height': '0',
            'overflow': 'hidden',
            'transition': 'max-height 0.4s ease'
        });
    });

    // Обработчик клика
    $('.card-vacancies__top').click(function() {
        const cardInner = $(this).closest('.card__inner');
        const content = cardInner.find('.card-vacancies__bottom');
        const icon = $(this).find('.card-vacancies__icon');
        const cardVacancies = $(this).closest('.card-vacancies'); // <-- Родительский элемент

        // Если текущий открыт - закрываем
        if (content.hasClass('card-vacancies__bottom--active')) {
            content.removeClass('card-vacancies__bottom--active').css('max-height', '0');
            icon.removeClass('card-vacancies__icon--active');
            cardVacancies.removeClass('card-vacancies--active'); // <-- Удаляем класс
        } 
        // Если закрыт - открываем
        else {
            // Закрываем все
            $('.card-vacancies__bottom.card-vacancies__bottom--active')
                .removeClass('card-vacancies__bottom--active')
                .css('max-height', '0')
                .closest('.card-vacancies')
                .removeClass('card-vacancies--active'); // <-- Удаляем у других

            $('.card-vacancies__icon.card-vacancies__icon--active').removeClass('card-vacancies__icon--active');

            // Открываем текущий
            content.addClass('card-vacancies__bottom--active').css('max-height', content.data('height'));
            icon.addClass('card-vacancies__icon--active');
            cardVacancies.addClass('card-vacancies--active'); // <-- Добавляем класс
        }
    });

    // Блокируем всплытие клика по контенту
    $('.card-vacancies__bottom').click(function(e) {
        e.stopPropagation();
    });
});
