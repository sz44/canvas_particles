const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

class FlowFieldEffect {
  #ctx;
  #width;
  #height;
  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#ctx.strokeStyle = "white";
    this.#width = width;
    this.#height = height;
    this.xs = 0;
    this.ys = 0;
  }
  #draw(x, y) {
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(x + 100, y + 100);
    this.#ctx.stroke();
  }
  animate() {
    this.#ctx.clearRect(0,0,this.#width,this.#height)
    this.#draw(100 + this.xs, 100 + this.ys);
    this.xs += 0.5;
    this.ys += 0.2; 
    requestAnimationFrame(this.animate.bind(this));
  }
}

const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
flowField.animate();