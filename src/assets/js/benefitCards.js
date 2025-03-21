$(document).ready(function () {
    const $homeBenefits = $('.home__benefits');
    const $body = $('body');
  
    // Удаляем хэш из URL (если он есть)
    if (window.location.hash) {
      history.replaceState(null, null, ' ');
    }
  
    // Отключаем восстановление скролла
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  
    // Прокручиваем страницу вверх
    $(window).scrollTop(0);
  
    // Функция для управления скроллом
    function toggleScroll() {
      const windowTop = $(window).scrollTop(); // Текущая позиция скролла
      const sectionTop = $homeBenefits.offset().top; // Позиция секции относительно верха страницы
      const sectionHeight = $homeBenefits.outerHeight(); // Высота секции
  
      // Проверяем, видна ли секция в области видимости
      if (windowTop >= sectionTop && windowTop < sectionTop + sectionHeight) {
        // Если секция в области видимости, отключаем скролл
        $body.css('overflow', 'hidden');
      } else {
        // Иначе включаем скролл обратно
        $body.css('overflow', 'auto');
      }
    }
  
    // Вызываем функцию при загрузке страницы
    toggleScroll();
  
    // Вызываем функцию при скролле
    $(window).scroll(function () {
      toggleScroll();
    });
  });


  $(document).ready(function () {
    const cards = $('.home__card-benefit');
    let currentIndex = 0;
    let isSectionActive = false;
    let scrollCount = 0; // Счётчик прокруток
    const scrollThreshold = 3; // Количество прокруток для удаления атрибута
  
    // Начальные стили для карточек
    function setInitialStyles() {
      cards.each(function () {
        $(this).addClass('home__card-benefit--hidden');
      });
    }
  
    // Функция для удаления атрибута style
    function revealNextCard() {
      if (currentIndex < cards.length) {
        $(cards[currentIndex]).removeClass('home__card-benefit--hidden'); // Удаляем атрибут style
        currentIndex++;
      }
    }
  
    // Инициализация: задаем начальные стили
    setInitialStyles();
  
    // Отслеживаем появление секции в области видимости
    const section = $('.home__benefits')[0];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isSectionActive = true;
          } else {
            isSectionActive = false;
            scrollCount = 0; // Сбрасываем счётчик, если секция вне области видимости
          }
        });
      },
      {
        threshold: 0.5, // Секция считается видимой, когда 50% её площади в области видимости
      }
    );
  
    observer.observe(section);
  
    // Обработчик прокрутки колеса мыши
    $(window).on('wheel', function (e) {
      if (isSectionActive && e.originalEvent.deltaY > 0) {
        scrollCount++; // Увеличиваем счётчик прокруток
        if (scrollCount >= scrollThreshold) {
          revealNextCard(); // Удаляем атрибут style
          scrollCount = 0; // Сбрасываем счётчик
        }
      }
    });
  });