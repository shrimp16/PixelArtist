export default class Brush {

    constructor() {
        this.colorView = document.getElementById('color');
        this.color = 'black';
        this.setup();
        this.cont = 1;

        document.getElementById('save').addEventListener('click', () => {
            let nrOfDraws = localStorage.length;
            this.cont = 1;
            localStorage.setItem(`draw${nrOfDraws + 1}`, document.getElementById('grid').innerHTML);
        });
        
        document.getElementById('load').addEventListener('click', () => {
            console.log(this.cont);
            document.getElementById('grid').innerHTML = localStorage.getItem(`draw${this.cont}`);
            this.cont++;
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