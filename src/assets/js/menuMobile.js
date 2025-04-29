$(document).ready(function () {
  // Делегированное открытие меню (блокируем скролл)
  $('body').on('click', '.c-header__button', function () {
    $('.body__menu-mobile').addClass('body__menu-mobile--active');
    $('body').addClass('body--no-scroll');
  });

  // Делегированное закрытие меню (возвращаем скролл)
  $('body').on('click', '.c-menu-mobile__close', function () {
    $('.body__menu-mobile').removeClass('body__menu-mobile--active');
    $('body').removeClass('body--no-scroll');
  });
});
