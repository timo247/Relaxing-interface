import {getRandomInt} from "../lib/Math.js"
import Particle from "./Particle.mjs"

export default class Buble extends Particle {
    constructor({x = getRandomInt(180, 220), y = getRandomInt(300, 400), r = getRandomInt(2, 10), dir = getRandomInt(-80, -100 ) / 180 * Math.PI, speed = 0.04, color = 'red'} = {}){
        super();
        this.x = x
        this.y = y
        this.color = color;
        this.r = r;
        this.dir = dir;
        this.speed = speed;
    }

    
}