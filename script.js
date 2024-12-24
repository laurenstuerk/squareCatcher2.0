const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
let score = 0;
let squareX, squareY;
let isRed = false;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function moveSquare() {
    squareX = Math.random() * (canvas.width - 50);
    squareY = Math.random() * (canvas.height - 50);
}

function drawScene() {
    ctx.fillStyle = isRed ? 'red' : 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(squareX, squareY, 50, 50);
}

function handleTouch(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;

    if (x >= squareX && x <= squareX + 50 && 
        y >= squareY && y <= squareY + 50) {
        isRed = false;
        score++;
        scoreElement.textContent = `Score: ${score}`;
        moveSquare();
    } else {
        isRed = true;
        score = 0;
    }
    drawScene();
}

window.addEventListener('resize', resizeCanvas);
canvas.addEventListener('touchstart', handleTouch);

resizeCanvas();
moveSquare();
drawScene();