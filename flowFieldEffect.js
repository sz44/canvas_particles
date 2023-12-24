const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

class FlowFieldEffect {
  #ctx;
  #width;
  #height;
  constructor(ctx, width, height) {
    console.log("constructed");
    this.#ctx = ctx;
    this.#ctx.strokeStyle = "white";
    this.#width = width;
    this.#height = height;
    this.x = 0;
    this.y = 0;
  }
  #draw(x, y) {
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(x + 100, y + 100);
    this.#ctx.stroke();
  }
  animate() {
    console.log("animating");
    this.#draw(100 + this.x, 100 + this.y);
    this.x += 0.2;
    this.y += 0.2; 
    requestAnimationFrame(this.animate.bind(this));
  }
}

const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
flowField.animate();