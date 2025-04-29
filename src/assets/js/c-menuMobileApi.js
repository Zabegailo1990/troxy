$(document).ready(function () {
  // Открытие меню (блокируем скролл)
  $('body').on('click', '.c-header__button', function () {
      $('.body__menu-mobile').addClass('body__menu-mobile--active');
      $('html, body').attr('style', 'overflow: hidden');
  });

  // Закрытие меню (возвращаем скролл)
  $('body').on('click', '.c-menu-mobile-api__close', function () {
      $('.body__menu-mobile').removeClass('body__menu-mobile--active');
      $('html, body').removeAttr('style');
  });
});
