const topImage = document.querySelector('.home__animate--top');
const bottomImage = document.querySelector('.home__animate--bottom');
const presentSection = document.querySelector('.home__present'); // Секция, в пределах которой будет работать анимация

// Функция для отслеживания движения мыши
document.addEventListener('mousemove', (event) => {
    // Получаем координаты мыши
    const { clientX: mouseX, clientY: mouseY } = event;

    // Получаем размеры окна
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    // Получаем размеры и положение секции .home__present
    const { top: sectionTop, left: sectionLeft, width: sectionWidth, height: sectionHeight } = presentSection.getBoundingClientRect();

    // Проверяем, если мышь находится в пределах секции .home__present
    if (
        mouseX > sectionLeft && mouseX < sectionLeft + sectionWidth &&
        mouseY > sectionTop && mouseY < sectionTop + sectionHeight
    ) {
        // Вычисляем смещение для наклона (перспективы)
        const offsetX = (mouseX / windowWidth - 0.5) * 50; // Увеличиваем смещение по X
        const offsetY = (mouseY / windowHeight - 0.5) * 50; // Увеличиваем смещение по Y

        // Применяем трансформацию для topImage (с добавлением наклона и смещения)
        topImage.style.transform = `translate(${offsetX * 3}px, ${offsetY * 3}px)`; // Увеличиваем множитель для большего движения

        // Применяем трансформацию для bottomImage (с добавлением наклона и смещения)
        bottomImage.style.transform = `translate(${offsetX * 2}px, ${offsetY * 2}px)`; // Увеличиваем множитель для bottomImage
    }
});
