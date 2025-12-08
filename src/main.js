// Position initiale du joueur
let x = 2; // position initiale
let y = 3; // position initiale

// Constantes pour réinitialiser le jeu
const START_X = 2;
const START_Y = 3;

// Configuration du jeu
const GRID_SIZE = 9; // Grille de 9x9 cases
const VITESSE = 500; // Vitesse de déplacement en millisecondes

// Variables de direction et score
let directionActive = null; // Direction active : "haut", "bas", "gauche", "droite"
let Score = 0; // Score actuel du joueur

// Réinitialise le jeu à l'état initial
function resetGame() {
    x = START_X; // Réinitialiser la position X
    y = START_Y; // Réinitialiser la position Y
    directionActive = null; // Arrêter tout mouvement
    Score = 0; // Réinitialiser le score
    document.getElementById('score').innerText = `Score: ${Score}`; // Mettre à jour l'affichage du score
    updateGrid(); // Redessiner la grille
    placerFruit(); // Placer un nouveau fruit
}

// Variables pour la position du fruit
let fruitX, fruitY;

// Place un fruit aléatoire sur la grille (jamais à la position du joueur)
function placerFruit() {
    // Générer une position aléatoire jusqu'à ne pas chevaucher le joueur
    do {
        fruitX = Math.floor(Math.random() * GRID_SIZE);
        fruitY = Math.floor(Math.random() * GRID_SIZE);
    } while (fruitX === x && fruitY === y);

    // Retirer la classe fruit de tous les éléments
    document.querySelectorAll('.fruit').forEach(cell => cell.classList.remove('fruit'));

    // Ajouter la classe fruit à la nouvelle case
    const fruitCell = document.querySelector(
        `.case[data-x='${fruitX}'][data-y='${fruitY}'], .casee[data-x='${fruitX}'][data-y='${fruitY}']`
    );
    if (fruitCell) fruitCell.classList.add('fruit');
}

// Met à jour l'affichage de la grille
function updateGrid() {
    // Vérifier si le joueur est sorti de la grille
    if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) {
        alert("Perdu !"); // Afficher un message de défaite
        resetGame(); // Réinitialiser le jeu
    }

    // Retirer la classe active de toutes les cases
    document.querySelectorAll('.case, .casee').forEach(cell => {
        cell.classList.remove('active');
    });

    // Ajouter la classe active à la position actuelle du joueur
    const cell = document.querySelector(
        `.case[data-x='${x}'][data-y='${y}'], .casee[data-x='${x}'][data-y='${y}']`
    );
    if (cell) cell.classList.add('active');

    // Vérifier si le joueur a mangé le fruit
    if (x === fruitX && y === fruitY) {
        placerFruit(); // Placer un nouveau fruit
        Score++; // Augmenter le score
        document.getElementById('score').innerText = `Score: ${Score}`; // Mettre à jour l'affichage
        console.log("Fruit mangé ! Score :", Score); // Log dans la console
    }
}

// Déplace le joueur selon la direction active
function deplacer() {
    if (!directionActive) return; // Ne rien faire si aucune direction n'est active
    
    // Modifier la position selon la direction
    switch(directionActive) {
        case "haut": y--; break;
        case "bas": y++; break;
        case "gauche": x--; break;
        case "droite": x++; break;
    }
    
    updateGrid(); // Mettre à jour l'affichage
}

// Écouteur d'événements pour les touches du clavier
window.addEventListener('keydown', (e) => {
    // Mapper les touches Z/S/Q/D et les flèches aux directions
    switch(e.key) {
        case "z": case "ArrowUp": directionActive = "haut"; break;
        case "s": case "ArrowDown": directionActive = "bas"; break;
        case "q": case "ArrowLeft": directionActive = "gauche"; break;
        case "d": case "ArrowRight": directionActive = "droite"; break;
    }
});

// Appeler la fonction deplacer toutes les VITESSE millisecondes
setInterval(deplacer, VITESSE);

// INITIALISATION DU JEU
updateGrid(); // Afficher le carré au départ
placerFruit(); // Afficher le fruit au départ
