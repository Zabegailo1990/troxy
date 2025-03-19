$(document).ready(function() {
    var currentCardIndex = 0;  // Индекс текущей карточки
    var cards = $('.home__card-benefit');
    var totalCards = cards.length;

    // Блокируем прокрутку страницы
    $('body').css('overflow', 'hidden');

    // Скрываем все карточки
    cards.css('display', 'none');

    // Функция для показа карточки
    function showCard(index) {
        if (index < totalCards) {
            // Показываем карточку
            $(cards[index]).fadeIn(600);  // Плавно показываем карточку
        }
    }

    // Обработчик события скролла (для мыши)
    $(window).on('wheel', function(event) {
        // Если карточки еще не все показаны
        if (currentCardIndex < totalCards) {
            event.preventDefault(); // Останавливаем прокрутку страницы
            showCard(currentCardIndex); // Показываем карточку
            currentCardIndex++; // Переходим к следующей карточке
        }

        // Если все карточки показаны, разблокируем прокрутку
        if (currentCardIndex === totalCards) {
            $('body').css('overflow', 'auto');
        }
    });

    // Обработчик событий touch для тачпада и сенсорных экранов
    var touchStartY = 0;  // Координата начала касания по Y

    $(window).on('touchstart', function(event) {
        touchStartY = event.originalEvent.touches[0].clientY;
    });

    $(window).on('touchmove', function(event) {
        var touchMoveY = event.originalEvent.touches[0].clientY;
        
        // Если мы прокручиваем вниз (сравниваем начальную и текущую позицию)
        if (touchStartY - touchMoveY > 20) {  // 20 пикселей для минимального движения
            if (currentCardIndex < totalCards) {
                event.preventDefault();  // Останавливаем прокрутку
                showCard(currentCardIndex);  // Показываем карточку
                currentCardIndex++;  // Переходим к следующей карточке
            }
        }

        // Если все карточки показаны, разблокируем прокрутку
        if (currentCardIndex === totalCards) {
            $('body').css('overflow', 'auto');
        }
    });
});
