export default class Brush {

    constructor() {
        this.colorView = document.getElementById('color');
        this.color = 'black';
        this.setup();

        document.getElementById('save').addEventListener('click', () => {
            localStorage.setItem('draw', document.getElementById('grid').innerHTML);
        });
        
        document.getElementById('load').addEventListener('click', () => {
            document.getElementById('grid').innerHTML = localStorage.getItem('draw');
            this.setup();
        });
    }

    setup() {
        let tiles = document.getElementsByClassName('square');
        for(let i = 0; i < tiles.length; i++){
            tiles[i].addEventListener('click', () => {
                tiles[i].style.backgroundColor = this.color;
            })
        }
    }

}