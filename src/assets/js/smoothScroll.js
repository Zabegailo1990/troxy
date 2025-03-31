// Инициализируем Lenis
const lenis = new Lenis({
    lerp: 0.1, // Плавность
    smooth: true, // Включаем сглаживание
    syncTouch: true, // Поддержка тач-скролла
    smoothTouch: false,
    infinite: false // Отключаем бесконечный скролл
});

// Обновляем ScrollTrigger при каждом кадре анимации
lenis.on('scroll', ScrollTrigger.update);

// Запускаем анимацию Lenis
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
