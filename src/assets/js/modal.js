$(document).ready(function() {
    // Открываем модалку сразу
    $('.modal').addClass('modal--active');
  
    // Сохраняем позицию скролла
    var scrollPosition = $(window).scrollTop();
  
    // Ставим стили через атрибут style
    $('html').attr('style', 'overflow: hidden; height: 100%;');
    $('body').attr('style', 
      'overflow: hidden; height: 100%; position: fixed; top: -' + scrollPosition + 'px; width: 100%;'
    );
  
    // Функция закрытия
    function closeModal() {
      $('.modal').removeClass('modal--active');
      $('html, body').removeAttr('style');
      $(window).scrollTop(scrollPosition);
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
  