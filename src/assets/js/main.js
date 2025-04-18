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






























