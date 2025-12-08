// Direction active : "haut", "bas", "gauche", "droite"
let directionActive = null;

// Écouteur d'événements pour les touches enfoncées
window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case "z": // Touche pour aller vers le haut
        case "ArrowUp": // Flèche haut
            directionActive = "haut";
            break;
        case "s": // Touche pour aller vers le bas
        case "ArrowDown": // Flèche bas
            directionActive = "bas";
            break;
        case "q": // Touche pour aller vers la gauche
        case "ArrowLeft": // Flèche gauche
            directionActive = "gauche";
            break;
        case "d": // Touche pour aller vers la droite
        case "ArrowRight": // Flèche droite
            directionActive = "droite";
            break;
        default:
            return; // Ne fait rien si la touche n'est pas reconnue
    }
    
    e.preventDefault(); // Empêche le défilement de la page
    console.log("Direction active :", directionActive); // Affiche la direction active dans la console
});

// Fonction principale de la boucle de jeu
function gameLoop() {
    if (directionActive) {
        // Logique de mise à jour du jeu en fonction de la direction active
    }
    
    requestAnimationFrame(gameLoop); // Appelle la fonction gameLoop à chaque frame
}

// Démarre la boucle de jeu
// Démarre la boucle de jeu uniquement si une touche est pressée
window.addEventListener('keydown', () => {
    if (!directionActive) {
        gameLoop();
    }
});
