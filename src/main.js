let x = 2; // position initiale
let y = 3; // position initiale
const GRID_SIZE = 6; // 6x6
const VITESSE = 500; // Vitesse de déplacement en ms

// Direction active : "haut", "bas", "gauche", "droite"
let directionActive = null;

function updateGrid() {
    // Vérifier si on est sorti de la grille
    if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) {
        console.log("Perdu !");
        return; // on arrête la fonction, ne met pas à jour la grille
    }

    // Retirer l'ancienne case active de toutes les cases
    document.querySelectorAll('.case, .casee').forEach(cell => {
        cell.classList.remove('active');
    });

    // Ajouter la classe à la case actuelle (peu importe si .case ou .casee)
    const cell = document.querySelector(
        `.case[data-x='${x}'][data-y='${y}'], .casee[data-x='${x}'][data-y='${y}']`
    );
    if (cell) cell.classList.add('active');
}


// Écouteur d'événements pour les touches enfoncées
window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case "z": // Touche pour aller vers le haut
        case "ArrowUp": // Flèche haut
            directionActive = "haut";
            y--; // Déplacer vers le haut
            updateGrid();
            break;
        case "s": // Touche pour aller vers le bas
        case "ArrowDown": // Flèche bas
            directionActive = "bas";
            y++; // Déplacer vers le bas
            updateGrid();
            break;
        case "q": // Touche pour aller vers la gauche
        case "ArrowLeft": // Flèche gauche
            directionActive = "gauche";
            x--; // Déplacer vers la gauche
            updateGrid();
            break;
        case "d": // Touche pour aller vers la droite
        case "ArrowRight": // Flèche droite
            directionActive = "droite";
            x++; // Déplacer vers la droite
            updateGrid();
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
