$(document).ready(function() {
    $('.c-menu-page__link').click(function(e) {
        // Проверяем, находится ли кликнутый элемент в .c-menu-page__sublist
        if ($(this).closest('.c-menu-page__sublist').length) {
            // Удаляем активный класс у всех ссылок внутри sublist
            $(this).closest('.c-menu-page__sublist').find('.c-menu-page__link').removeClass('c-menu-page__link--active');
            
            // Добавляем активный класс только к кликнутой ссылке
            $(this).addClass('c-menu-page__link--active');
            
            e.stopPropagation();
            return;
        }
        
        e.preventDefault();
        
        let $currentSublist = $(this).closest('.c-menu-page__item').find('.c-menu-page__sublist');
        
        // Закрываем все открытые sublist, кроме текущего
        $('.c-menu-page__sublist').not($currentSublist).slideUp(200);
        
        // Удаляем активный класс у всех ссылок
        $('.c-menu-page__link').removeClass('c-menu-page__link--active');
        
        // Добавляем активный класс к текущей ссылке
        $(this).addClass('c-menu-page__link--active');
        
        // Добавляем активный класс к родительской ссылке, если это элемент внутри sublist
        $(this).closest('.c-menu-page__sublist').prev('.c-menu-page__row').find('.c-menu-page__link').addClass('c-menu-page__link--active');
        
        // Переключаем отображение текущего sublist
        $currentSublist.slideToggle(200);
    });
});