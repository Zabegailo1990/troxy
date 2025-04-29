$(function () {
    const select = '.js-select';

    $('body').on('click', `${select} .js-select__selected`, function (e) {
        e.stopPropagation();
        const parent = $(this).closest(select);

        const icon = parent.find('.js-select__icon');
        if (icon.length) {
            icon.addClass('js-select__icon--active');
        }
        
        $('.js-select__options').removeClass('js-select__options--active');
        
        parent.find('.js-select__options').toggleClass('js-select__options--active');
    });

    $('body').on('click', `${select} .js-select__value`, function (e) {
        e.stopPropagation();
        const parent = $(this).closest(select);
        const text = $(this).text();

        parent.find('.js-select__selected').text(text);
        $(this).addClass('js-select__value--selected').siblings().removeClass('js-select__value--selected');
        parent.find('.js-select__options').removeClass('js-select__options--active');
        $('.js-select__icon').removeClass('js-select__icon--active');
    });

    $('body').on('click', function () {
        $('.js-select__options').removeClass('js-select__options--active');
        $('.js-select__icon').removeClass('js-select__icon--active');
    });
});
