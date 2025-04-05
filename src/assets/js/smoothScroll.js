const lenis = new Lenis({
    lerp: 0.05, // Плавность
    smooth: true, // Включаем сглаживание
    syncTouch: true, // Поддержка тач-скролла
    smoothTouch: false,
    infinite: false, // Отключаем бесконечный скролл
});

// Проверяем, есть ли ScrollTrigger на странице
if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    
    // Обновляем ScrollTrigger при скролле
    lenis.on('scroll', () => {
        ScrollTrigger.update();
    });
}

// Запускаем анимацию Lenis
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
