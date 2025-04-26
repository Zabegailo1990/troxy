$(document).ready(function () {
    const select = '.c-authbar__select';

    $(document).on('click', `${select} .c-authbar__selected`, function (e) {
        e.stopPropagation();
        $(`${select} .c-authbar__options`).toggleClass('c-authbar__options--active');
    });

    $(document).on('click', `${select} .c-authbar__value`, function (e) {
        e.stopPropagation();
        const text = $(this).text();
        $(this).closest(select).find('.c-authbar__selected').text(text);
        $(this).addClass('c-authbar--selected').siblings().removeClass('c-authbar--selected');
        $(`${select} .c-authbar__options`).removeClass('c-authbar__options--active');
    });

    $(document).on('click', () => {
        $(`${select} .c-authbar__options`).removeClass('c-authbar__options--active');
    });
});
