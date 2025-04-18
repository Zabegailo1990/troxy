$(document).ready(function () {
    // Открытие меню (блокируем скролл)
    $('.header__button').on('click', function () {
      $('.body__menu-mobile').addClass('body__menu-mobile--active');
      $('html, body').attr('style', 'overflow: hidden');
    });
  
    // Закрытие меню (возвращаем скролл)
    $('.c-menu-mobile-api').on('click', '.c-menu-mobile-api__close', function () {
      $('.body__menu-mobile').removeClass('body__menu-mobile--active');
      $('html, body').removeAttr('style'); // Удаляем атрибут style
    });
  });