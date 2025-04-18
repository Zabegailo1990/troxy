// $(document).ready(function () {
//     const $slider = $('.marquee__inner');
  
//     // 1. Инициализируем слайдер
//     $slider.slick({
//       slidesToShow: 7,
//       slidesToScroll: 1,
//       infinite: false, // это важно!
//       centerMode: true,
//     });
  
//     gsap.registerPlugin(ScrollTrigger);
  
//     // 2. Получаем общее количество слайдов
//     const slickInstance = $slider.slick('getSlick');
//     const totalSlides = slickInstance.slideCount;
//     const slidesToShow = slickInstance.options.slidesToShow;
//     const lastSlideIndex = totalSlides - slidesToShow;
  
//     // 3. Индексируем слайды (можно добавить data-атрибуты)
//     $slider.find('.slick-slide').each(function (i) {
//       $(this).attr('data-slide-index', i);
//     });
  
//     // 4. Создаем ScrollTrigger
//     const trigger = ScrollTrigger.create({
//       trigger: '.home__section-marquee',
//       start: 'top top',
//       end: `+=${lastSlideIndex * 500}`,
//       scrub: 2,
//       pin: true,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const currentIndex = Math.round(progress * lastSlideIndex);
  
//         // Переключаем слайд
//         $slider.slick('slickGoTo', currentIndex);
  
//         // Проверяем: если дошли до последнего — отпускаем pin
//         if (currentIndex >= lastSlideIndex) {
//           // Снимаем pin динамически
//           trigger.disable(); // отключает ScrollTrigger
//           ScrollTrigger.refresh();
//         }
//       },
//       onEnterBack: () => {
//         trigger.enable(); // если возвращаемся назад — снова активируем
//         ScrollTrigger.refresh();
//       }
//     });
//   });
  