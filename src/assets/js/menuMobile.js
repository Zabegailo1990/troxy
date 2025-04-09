$(document).ready(function () {
    // Открытие меню
    $('.header__button').on('click', function () {
      $('.body__menu-mobile').addClass('body__menu-mobile--active');
      $('.body').addClass('body--blocking');
    });
  
    // Закрытие меню по кнопке внутри .c-menu-mobile
    $('.c-menu-mobile').on('click', 'button', function () {
      $('.body__menu-mobile').removeClass('body__menu-mobile--active');
      $('.body').removeClass('body--blocking');
    });
  });
  