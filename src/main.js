document.body.onload = async () => {
    const map = await import('./map.js');
    const mapLoader = new map.default();
    mapLoader.loadGrid();
}