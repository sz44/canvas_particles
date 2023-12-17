const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleArray = [];
let hue = 0;
let hueSpeed = 2;
let trailOpacity = 0.10;

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.color = `hsl(${hue}, 100%, 50%)`;
    this.size = Math.random() * 20 + 2;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

const mouse = {
  x: null,
  y: null
}

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  createParticles(5);
});

canvas.addEventListener("click", (e) => {
  createParticles(20);
});

animate();

function createParticles(n) {
  for (let i = 0; i < n; i++) {
    particleArray.push(new Particle());
  }
}

function animate() {
  // ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = `rgba(0,0,0,${ trailOpacity })`
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for (let j = 0; j<particleArray.length; j++) {
    particleArray[j].update();
    particleArray[j].draw();
    if (particleArray[j].size < 0.2) {
        particleArray.splice(j, 1);
        j--;
    }
  }
  hue += hueSpeed;
  window.requestAnimationFrame(animate);
}