// 1. Инициализация Lenis
const lenis = new Lenis({
    lerp: 0.1, // Плавность (меньше = более резкий скролл)
    smooth: true, // Включить плавный скролл
    direction: 'vertical', // Вертикальный скролл
  });
  
  // 2. Обновление ScrollTrigger при скролле Lenis
  lenis.on('scroll', ScrollTrigger.update);
  
  // 3. Запуск анимации кадров
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Умножаем на 1000, если GSAP использует секунды
  });
  
  // 4. Отключение стандартного скролла браузера
  gsap.ticker.lagSmoothing(0);