export default class Brush {

    constructor() {
        this.tiles = document.getElementsByClassName('square');
        this.colorView = document.getElementById('color');
        this.color = 'black';
        this.setup();

        document.getElementById('save').addEventListener('click', this.saveDraw);
        document.getElementById('load').addEventListener('click', this.loadDraw);
    }

    setup() {
        for(let i = 0; i < this.tiles.length; i++){
            this.tiles[i].addEventListener('click', () => {
                this.tiles[i].style.backgroundColor = this.color;
            })
        }
    }

    saveDraw(){
        localStorage.setItem('draw', document.getElementById('grid').innerHTML);
    }

    loadDraw(){
        document.getElementById('grid').innerHTML = localStorage.getItem('draw');
    }

}