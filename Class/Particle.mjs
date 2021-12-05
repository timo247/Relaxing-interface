export default class Particle {

    constructor({x = 0, y = 0, r = 10, speed = 0.12, dir = Math.PI / -2, color = 'blue', topLimit = 100, bottomLimit = 400} = {}) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.color = color;
      this.speed = speed;
      this.dir = dir; // radian
      this.topLimit = topLimit
      this.bottomLimit = bottomLimit
    }
  
    getRadius() {
      return this.r;
    }
  
    setSpeed(speed){
      this.speed = speed;
    }
  
    setColor(color){
      this.color = color;
    }
  
    setDir(dir){
      this.dir = dir;
    }

    setTopLimit(top){
        this.topLimit = top
    }

    setBottomLimit(bottom){
        this.bottomLimit = bottom
    }
  
  
    draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  
    move(deltaT) {
      const distX = this.speed * deltaT * Math.cos(this.dir);
      const distY = this.speed * deltaT * Math.sin(this.dir);
      this.x += distX;
      this.y += distY;

    }

    applyOrbitalPath(){
      if (this.y - this.r < this.topLimit) {
        this.dir = -1 * this.dir;
        console.log("2")
      }
      if (this.y + this.r > this.bottomLimit) {
        this.dir = -1 * this.dir;
        console.log("2", this)
      }
    }
  
  }