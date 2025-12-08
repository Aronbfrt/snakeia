const keys = {};

window.addEventListener('keydown', (e) => {
    if (!keys[e.key]) { // si la touche n'était pas déjà pressée
        keys[e.key] = true;

        switch(e.key) {
            case "z":
            case "ArrowUp":
                console.log("Haut");
                break;
            case "s":
            case "ArrowDown":
                console.log("Bas");
                break;
            case "q":
            case "ArrowLeft":
                console.log("Gauche");
                break;
            case "d":
            case "ArrowRight":
                console.log("Droite");
                break;
        }
    }
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false; // remet la touche à false quand elle est relâchée
});