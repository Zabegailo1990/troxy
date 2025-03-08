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




