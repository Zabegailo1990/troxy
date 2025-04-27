$(function () {
    const select = '.js-select';

    $('body').on('click', `${select} .js-select__selected`, function (e) {
        e.stopPropagation();
        const parent = $(this).closest(select);
        
        // Закрываем все сначала
        $('.js-select__options').removeClass('js-select__options--active');
        
        // Открываем только выбранный
        parent.find('.js-select__options').toggleClass('js-select__options--active');
    });

    $('body').on('click', `${select} .js-select__value`, function (e) {
        e.stopPropagation();
        const parent = $(this).closest(select);
        const text = $(this).text();

        parent.find('.js-select__selected').text(text);
        $(this).addClass('js-select--selected').siblings().removeClass('js-select--selected');
        parent.find('.js-select__options').removeClass('js-select__options--active');
    });

    $('body').on('click', function () {
        $('.js-select__options').removeClass('js-select__options--active');
    });
});
