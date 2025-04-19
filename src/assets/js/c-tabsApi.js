$(document).ready(function () {
    let $underline = $('.c-tabs-api__underline');

    function moveUnderline($tab) {
        $underline.css({
            left: $tab.position().left,
            width: $tab.outerWidth()
        });
    }

    // Инициализация
    const $initialTab = $('.c-tabs-api__tab--active');
    if ($initialTab.length) {
        moveUnderline($initialTab);
    }

    // Делегированный обработчик
    $('body').on('click', '.c-tabs-api__tab', function () {
        const $this = $(this);

        if ($this.hasClass('c-tabs-api__tab--active')) return;

        $('.c-tabs-api__tab').removeClass('c-tabs-api__tab--active');
        $this.addClass('c-tabs-api__tab--active');

        moveUnderline($this);

        $('.c-tabs-api__item').hide().eq($this.index()).fadeIn(500);
    });
});
