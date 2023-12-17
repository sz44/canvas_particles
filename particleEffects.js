const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.color = `hsl(120, 100%, 100%)`;
    this.size = Math.random() * 30 + 2;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    // this.size -= 0.2;
  }
  
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill()
  }
}

canvas.addEventListener("mousemove", (e) => {
});

createParticles(100);
draw();

function createParticles(n) {
  for (let i = 0; i < n; i++) {
    particleArray.push(new Particle());
  }
}

function draw() {
  // ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "black";
  ctx.rect(0,0,canvas.width,canvas.height);
  // ctx.rect(0,0,canvas.width,canvas.height);
  for (let j = 0; j<particleArray.length; j++) {
    particleArray[j].update();
    particleArray[j].draw();
    if (particleArray[j].size < 0.3) {
        particleArray.splice(j, 1);
    }
  }
  window.requestAnimationFrame(draw);
}
  
