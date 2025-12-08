let x = 2; // position initiale
let y = 3; // position initiale
const START_X = 2;
const START_Y = 3;

const GRID_SIZE = 6; // 6x6
const VITESSE = 500; // Vitesse de déplacement en ms

// Direction active : "haut", "bas", "gauche", "droite"
let directionActive = null;
let Score = 0;

// Placer le fruit initialement



function resetGame() {
    x = START_X;
    y = START_Y;
    directionActive = null;
    Score = 0;
    document.getElementById('score').innerText = `Score: ${Score}`;
    updateGrid();
    placerFruit();
}


let fruitX, fruitY;
function placerFruit() {
    do {
        fruitX = Math.floor(Math.random() * GRID_SIZE);
        fruitY = Math.floor(Math.random() * GRID_SIZE);
    } while (fruitX === x && fruitY === y); // jamais sur la position actuelle

    // Retirer tout ancien fruit
    document.querySelectorAll('.fruit').forEach(cell => cell.classList.remove('fruit'));

    // Ajouter la classe fruit à la case choisie
    const fruitCell = document.querySelector(
        `.case[data-x='${fruitX}'][data-y='${fruitY}'], .casee[data-x='${fruitX}'][data-y='${fruitY}']`
    );
    if (fruitCell) fruitCell.classList.add('fruit');
}

function updateGrid() {
    // Vérifier si on est sorti de la grille
    if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) {
        alert("Perdu !");
        resetGame();
    }

    // Retirer l'ancienne case active
    document.querySelectorAll('.case, .casee').forEach(cell => {
        cell.classList.remove('active');
    });

    // Ajouter la classe active au carré
    const cell = document.querySelector(
        `.case[data-x='${x}'][data-y='${y}'], .casee[data-x='${x}'][data-y='${y}']`
    );
    if (cell) cell.classList.add('active');

    // Vérifier si le carré a mangé le fruit
    if (x === fruitX && y === fruitY) {
        placerFruit();
        Score++;
        document.getElementById('score').innerText = `Score: ${Score}`;
        console.log("Fruit mangé ! Score :", Score);
    }
}


function deplacer() {
    if (!directionActive) return; 
    switch(directionActive) {
        case "haut": y--; break;
        case "bas": y++; break;
        case "gauche": x--; break;
        case "droite": x++; break;
    }
    updateGrid();
}


window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case "z": case "ArrowUp": directionActive = "haut"; break;
        case "s": case "ArrowDown": directionActive = "bas"; break;
        case "q": case "ArrowLeft": directionActive = "gauche"; break;
        case "d": case "ArrowRight": directionActive = "droite"; break;
    }
});



setInterval(deplacer, VITESSE);

// INITIALISATION
updateGrid();  // affiche le carré au départ
placerFruit(); // affiche le fruit au départ
