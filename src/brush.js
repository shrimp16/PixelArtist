export default class Brush {

    constructor() {
        this.tiles = document.getElementsByClassName('square');
        this.color = 'white';
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