// Direction active : "haut", "bas", "gauche", "droite"
let directionActive = null;

window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case "z":
        case "ArrowUp":
            directionActive = "haut";
            break;
        case "s":
        case "ArrowDown":
            directionActive = "bas";
            break;
        case "q":
        case "ArrowLeft":
            directionActive = "gauche";
            break;
        case "d":
        case "ArrowRight":
            directionActive = "droite";
            break;
        default:
            return; 
    }
    
    e.preventDefault(); // empêche le scroll de la page
    console.log("Direction active :", directionActive);
});


function gameLoop() {
    if (directionActive) {
        
    }
    
    requestAnimationFrame(gameLoop);
}

gameLoop();
