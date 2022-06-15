import Brush from "./brush.js";
import { colors } from "./colors.js";

export default class Pallete {

    constructor() {
        this.palleteColors = document.getElementsByClassName('color');
        this.setup();
        this.brush = new Brush();
    }

    setup() {
        for(let i = 0; i < this.palleteColors.length; i++){
            this.palleteColors[i].addEventListener('click', () => {
                this.brush.color = colors[i];
            })
        }
    }
}