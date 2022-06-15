import Brush from "./brush.js";

export default class Pallete {

    constructor() {
        this.palleteColors = document.getElementsByClassName('color');
        this.setup();
        this.brush = new Brush();
    }

    setup() {
        for(let i = 0; i < this.palleteColors.length; i++){
            this.palleteColors[i].addEventListener('click', () => {
                console.log('xd');
                console.log(this.brush.color);
                this.brush.color = 'red';
            })
        }
    }
}