$(document).ready(function() {
    // Открываем модалку сразу
    $('.modal').addClass('modal--active');

  
    // Функция закрытия
    function closeModal() {
      $('.modal').removeClass('modal--active');
    }
  
    // Клик по кнопке
    $('.modal__button').on('click', closeModal);
  
    // Клик по overlay, но не по inner
    $('.modal__overlay').on('click', function(e) {
      if ($(e.target).is('.modal__overlay')) {
        closeModal();
      }
    });
  });
  