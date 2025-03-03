$(document).ready(function () {
  $("body").on("click", ".api__item > .api__button", function (event) {
      let parentItem = $(this).closest(".api__item");
      let icon = parentItem.find(".api__icon-right");
      let submenu = parentItem.find(".api__submenu");

      let isActive = parentItem.hasClass("api__item--active");

      // Закрываем все другие пункты
      $(".api__item").not(parentItem).removeClass("api__item--active");
      $(".api__icon-right").not(icon).removeClass("api__icon-right--active");
      $(".api__submenu").not(submenu).slideUp(300).removeClass("api__submenu--active");

      // Тогглим текущий пункт
      if (isActive) {
          parentItem.removeClass("api__item--active");
          icon.removeClass("api__icon-right--active");
          submenu.slideUp(300).removeClass("api__submenu--active");
      } else {
          parentItem.addClass("api__item--active");
          icon.addClass("api__icon-right--active");
          submenu.slideDown(300).addClass("api__submenu--active");
      }

      event.stopPropagation(); // Останавливаем всплытие события
  });

  // Убираем закрытие при клике на вложенные элементы
  $("body").on("click", ".api__submenu .api__subitem", function (event) {
      event.stopPropagation();
  });
});


$(document).ready(function () {
    $("body").on("click", ".check-proxy__select", function (e) {
        e.stopPropagation(); // Останавливаем всплытие, чтобы не срабатывало на body
        $(".check-proxy__options").removeClass("check-proxy__options--active"); // Закрываем все открытые списки
        $(this).find(".check-proxy__options").addClass("check-proxy__options--active");
    });

    // Выбор элемента из списка
    $("body").on("click", ".check-proxy__value", function (e) {
        e.stopPropagation(); // Останавливаем всплытие
        let $select = $(this).closest(".check-proxy__select");
        let $name = $select.find(".check-proxy__name");
        
        // Обновляем текст в блоке
        $name.text($(this).text());

        // Убираем старый selected и добавляем к текущему
        $select.find(".check-proxy__value").removeClass("check-proxy__value--selected");
        $(this).addClass("check-proxy__value--selected");

        // Закрываем список
        $select.find(".check-proxy__options").removeClass("check-proxy__options--active");
    });

    // Закрытие при клике вне элемента
    $(document).on("click", function () {
        $(".check-proxy__options").removeClass("check-proxy__options--active");
    });
});

