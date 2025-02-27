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
