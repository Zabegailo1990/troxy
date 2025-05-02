$(function () {
    const input = '.js-input';
    $('body')
    .on('focus', input, function (e) {
        $(this).addClass('js-input--active');
    })
    .on('blur', input, function (e) {
        $(this).removeClass('js-input--active');
    });
});