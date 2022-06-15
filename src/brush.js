export default class Brush {

    constructor() {
        this.tiles = document.getElementsByClassName('square');
        this.color;
        this.setup();
    }

    setColor(color){
        this.color = color;
    }

    setup() {
        for(let i = 0; i < this.tiles.length; i++){
            this.tiles[i].addEventListener('click', () => {
                this.tiles[i].style.backgroundColor = this.color;
            })
        }
    }

}