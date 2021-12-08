export default class Keyboard {

    constructor() {
      window.addEventListener('keydown', evt => this.#onKeyDown(evt));
      window.addEventListener('keyup', evt => this.#onKeyUp(evt));
      this.keysPressed = new Set();
      this.keysReleased = new Set();
    }
  
    #onKeyDown(evt) {
      let key = evt.code;
      this.keysPressed.add(key);
      if(this.keysReleased.has(key)){
        this.keysReleased.delete(key);
      }
      console.log(key)
    }
  
    #onKeyUp(evt) {
      let key = evt.code;
      this.keysPressed.delete(key);
      this.keysReleased.add(key)
    }

    isKeyUp(key){
      return this.keysReleased.has(key);
    }

    isKeysUp(...keys){
      return keys.every(key => this.keysReleased.has(key));
    }
  
    isKeyDown(key) {
      return this.keysPressed.has(key);
    }
  
    isKeysDown(...keys) {
      return keys.every(key => this.isKeyDown(key));
    }
  
  }