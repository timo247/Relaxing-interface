export default class Particle {

    constructor({x = 0, y = 0, r = 10, speed = 0.12, dir = Math.PI / 2, color = 'blue', topLimit = 100, bottomLimit = 400} = {}) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.color = color;
      this.speed = speed;
      this.dir = dir; // radian
      this.topLimit = topLimit
      this.bottomLimit = bottomLimit
      this.isActivated = false;
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

    moveUp(dt){
      //const distX = this.speed * deltaT * Math.cos(Math.PI / -2);
      const distY = this.speed * dt * Math.sin(Math.PI / -2);
      //this.x += distX;
      this.y += distY;
    }

    moveDown(dt){
      //const distX = this.speed * deltaT * Math.cos(Math.PI / -2);
      const distY = this.speed * dt * Math.sin(Math.PI / 2);
      //this.x += distX;
      this.y += distY;
    }


    toggleDirection(){
      this.dir = -1 * this.dir;
    }

    applyPath(){
      if (this.y - this.r < this.topLimit) {
        if(this.isActivated){
          this.speed = 0;
        } else {
          this.dir = -1 * this.dir
        }
      } else if (this.y + this.r > this.bottomLimit){
        if(this.isActivated){
          this.speed = 0;
        } else {
          this.dir = -1 * this.dir
        }
      }
    }
    /*
    applyOrbitalPath(){
      if (this.y - this.r < this.topLimit) {
        this.dir = -1 * this.dir;
        console.log("2")
      }
      else if (this.y + this.r > this.bottomLimit) {
        this.dir = -1 * this.dir;
        console.log("2", this)
      }
    }
    */
  
  }