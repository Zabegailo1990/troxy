$(document).ready(function() {
  // Открываем модалку
  openModal();

  // Закрытие по кнопке
  $('body').on('click', '.modal__button', closeModal);

  // Закрытие по overlay
  $('body').on('click', '.modal__overlay', function(e) {
      if ($(e.target).is('.modal__overlay')) {
          closeModal();
      }
  });

  function openModal() {
      $('.modal').addClass('modal--active');
      $('body').addClass('body--no-scroll');
  }

  function closeModal() {
      $('.modal').removeClass('modal--active');
      $('body').removeClass('body--no-scroll');
  }
});

  