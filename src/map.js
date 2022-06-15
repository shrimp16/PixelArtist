export default class Map {

    constructor() {
        this.body = document.getElementById('grid');
    }

    loadGrid() {
        let html = '';
        for (let i = 0; i < 30; i++) {
            html += '<div>'

            for (let b = 0; b < 20; b++) {
                html += `<div class="square"></div>`
            }

            html += '</div>'
        }
        this.body.innerHTML = html;
    }

}