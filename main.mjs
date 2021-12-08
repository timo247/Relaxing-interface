import MainLoop from '../lib/Mainloop.js';
import Particle from '../Class/Particle.mjs'
import Keyboard from './Keyboard.js';
import { getRandomInt } from '../lib/math.js';

const ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;

let bigCircle = new Particle({ x: ctx.canvas.width / 2, y: ctx.canvas.height - 30, r: 30 });
let smallCircle = new Particle({ x: ctx.canvas.width / 2, y: ctx.canvas.height - 10, r: 10, color:"orange", speed: 0.04 / 3});

bigCircle.setTopLimit(ctx.canvas.height * 1 / 4)
smallCircle.setTopLimit(ctx.canvas.height * 3 / 4)

bigCircle.setBottomLimit(ctx.canvas.height)
smallCircle.setBottomLimit(ctx.canvas.height)


let particles = [bigCircle, smallCircle];
//background
let montagnes = new Image ();
montagnes.src = "../visuels/montagnes.svg"

let keyboard = new Keyboard





MainLoop.setUpdate(dt => {

   console.log("dt1", dt)
    if(keyboard.isKeyDown("Space")){
      if(smallCircle.y - smallCircle.r < smallCircle.topLimit || bigCircle.y - bigCircle.r < bigCircle.topLimit){
        return
      } else {
      smallCircle.moveUp(dt); 
      bigCircle.moveUp(dt);
      }
    }
            
    if(keyboard.isKeyUp("Space"))
      if(smallCircle.y + smallCircle.r > smallCircle.bottomLimit || bigCircle.y + bigCircle.r > bigCircle.bottomLimit  ){
        return
      }else{
        smallCircle.moveDown(dt);
        bigCircle.moveDown(dt);
      }      
    
})

MainLoop.setDraw(() => {
    ctx.canvas.width = ctx.canvas.clientWidth;
    ctx.canvas.height = ctx.canvas.clientHeight;
    bigCircle.draw(ctx)
    smallCircle.draw(ctx);

    //ctx.drawImage(montagnes, 0, 24, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    
  })

MainLoop.start();