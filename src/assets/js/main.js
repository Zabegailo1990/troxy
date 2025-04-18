$(document).ready(function () {
    // Открытие списка при клике на .select__front
    $("body").on("click", ".proxy-checker__select .select__front, .proxy-list__select .select__front", function (e) {
        e.stopPropagation(); // Останавливаем всплытие
        $(".select__options").removeClass("select__options--active"); // Закрываем другие списки
        $(this).siblings(".select__options").toggleClass("select__options--active"); // Открываем текущий список
    });

    // Выбор элемента из списка
    $("body").on("click", ".proxy-checker__select .select__value, .proxy-list__select .select__value", function (e) {
        e.stopPropagation(); // Останавливаем всплытие

        let $select = $(this).closest(".proxy-checker__select, .proxy-list__select"); 
        let $name = $select.find(".select__name"); 
        
        // Обновляем текст в блоке
        $name.text($(this).text());

        // Убираем старый selected и добавляем к текущему
        $select.find(".select__value").removeClass("select__value--selected"); 
        $(this).addClass("select__value--selected"); 

        // Закрываем список
        $select.find(".select__options").removeClass("select__options--active"); 
    });

    // Закрытие списка при клике вне него
    $(document).on("click", function () {
        $(".select__options").removeClass("select__options--active");
    });
});

$(document).ready(function() {
    $('.menu-page__link').click(function(e) {
        // Проверяем, находится ли кликнутый элемент в .menu-page__sublist
        if ($(this).closest('.menu-page__sublist').length) {
            // Удаляем активный класс у всех ссылок внутри sublist
            $(this).closest('.menu-page__sublist').find('.menu-page__link').removeClass('menu-page__link--active');
            
            // Добавляем активный класс только к кликнутой ссылке
            $(this).addClass('menu-page__link--active');
            
            e.stopPropagation();
            return;
        }
        
        e.preventDefault();
        
        let $currentSublist = $(this).closest('.menu-page__item').find('.menu-page__sublist');
        
        // Закрываем все открытые sublist, кроме текущего
        $('.menu-page__sublist').not($currentSublist).slideUp(200);
        
        // Удаляем активный класс у всех ссылок
        $('.menu-page__link').removeClass('menu-page__link--active');
        
        // Добавляем активный класс к текущей ссылке
        $(this).addClass('menu-page__link--active');
        
        // Добавляем активный класс к родительской ссылке, если это элемент внутри sublist
        $(this).closest('.menu-page__sublist').prev('.menu-page__row').find('.menu-page__link').addClass('menu-page__link--active');
        
        // Переключаем отображение текущего sublist
        $currentSublist.slideToggle(200);
    });
});



$(document).ready(function () {
    let $underline = $('.tabs-api__underline');

    function moveUnderline($tab) {
        $underline.css({
            left: $tab.position().left,
            width: $tab.outerWidth()
        });
    }

    // Инициализация
    moveUnderline($('.tabs-api__tab--active'));

    $('.tabs-api__tab').click(function () {
        if ($(this).hasClass('tabs-api__tab--active')) return;

        $('.tabs-api__tab').removeClass('tabs-api__tab--active');
        $(this).addClass('tabs-api__tab--active');

        moveUnderline($(this));

        $('.tabs-api__item').hide().eq($(this).index()).fadeIn(500);
    });
});






























