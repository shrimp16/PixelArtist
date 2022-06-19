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
                this.brush.colorView.style.backgroundColor = colors[i];
            })
        }

        document.getElementById('custom-color').addEventListener('input', () => {
            console.log("color")
            this.brush.colorView.style.backgroundColor = document.getElementById('custom-color').value;
            this.brush.color = document.getElementById('custom-color').value;
        })
    }
}