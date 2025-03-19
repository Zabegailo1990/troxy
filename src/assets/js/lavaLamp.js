const canvas = document.getElementById('lavaCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let blobs = [];

class Blob {
    constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.visible = true; // Видимость
        this.alpha = 1; // Прозрачность
        this.fadeSpeed = Math.random() * 0.01 + 0.002; // Скорость исчезновения/появления
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
            this.speedX *= -1;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
            this.speedY *= -1;
        }

        // Плавное исчезновение и появление
        if (Math.random() < 0.002) {
            if (this.visible) {
                this.alpha -= this.fadeSpeed;
                if (this.alpha <= 0) {
                    this.alpha = 0;
                    this.visible = false;
                }
            } else {
                this.alpha += this.fadeSpeed;
                if (this.alpha >= 1) {
                    this.alpha = 1;
                    this.visible = true;
                }
            }
        }
    }
}

function createBlobs(count) {
    blobs = []; // Очистка массива перед созданием
    for (let i = 0; i < count; i++) {
        let radius = Math.random() * 100 + 300; // Blob'ы разных размеров
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 10;
        let speedY = (Math.random() - 0.5) * 10;

        blobs.push(new Blob(x, y, radius, speedX, speedY));
    }
}

function metaballEffect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = imageData.data;

    for (let i = 0; i < pixels.length; i += 4) {
        let x = (i / 4) % canvas.width;
        let y = Math.floor(i / 4 / canvas.width);

        let sum = 0;
        for (let blob of blobs) {
            if (!blob.visible) continue; // Пропускаем невидимые blob'ы
            let dx = x - blob.x;
            let dy = y - blob.y;
            sum += blob.radius * blob.radius / (dx * dx + dy * dy + 0.0001);
        }

        let intensity = Math.min(sum * 50, 255);
        pixels[i] = 214;
        pixels[i + 1] = 229;
        pixels[i + 2] = 255;
        pixels[i + 3] = intensity;
    }

    ctx.putImageData(imageData, 0, 0);
}

function animate() {
    for (let blob of blobs) {
        blob.update();
    }
    metaballEffect();
    requestAnimationFrame(animate);
}

createBlobs(4);
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createBlobs(4);
});