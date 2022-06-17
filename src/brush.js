export default class Brush {

    constructor() {
        this.tiles = document.getElementsByClassName('square');
        this.colorView = document.getElementById('color');
        this.color = 'black';
        this.setup();
    }

    setup() {
        for(let i = 0; i < this.tiles.length; i++){
            this.tiles[i].addEventListener('click', () => {
                this.tiles[i].style.backgroundColor = this.color;
            })
        }
    }

}