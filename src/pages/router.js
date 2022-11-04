export class Router {
    constructor() {
        window.addEventListener("hashchange", () => {
            this.routeChangeHandler();
        })
        this.slot = document.querySelector('#slot');
        this.routeChangeHandler();
    }

    routeChangeHandler(){
        //do something
    }

}