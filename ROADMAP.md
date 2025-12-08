# 🗺️ Roadmap de Développement – Sankeia (Snake JS)

Ce document est un guide pas-à-pas pour créer le jeu Snake en JavaScript, en partant de zéro. Chaque étape se concentre sur une seule fonctionnalité à la fois.

---

### Étape 0 : Préparation

Avant de dessiner, on prépare notre "atelier".

- **1. Préparer les Fichiers :**
  - Crée un fichier `index.html` pour la page web.
  - Crée un fichier `style.css` pour le look.
  - Crée un dossier `src` avec un fichier `main.js` dedans. C'est là que la magie opérera.

- **2. Mettre en Place la "Toile" :**
  - Dans `index.html`, ajoute un élément `<canvas>`. C'est ta feuille de dessin numérique.
  - Dans `style.css`, donne-lui une bordure et une couleur de fond pour bien la voir.
  - Dans `main.js`, récupère ce canvas pour pouvoir dessiner dessus.

---

### Étape 1 : Dessiner les Éléments de Base

On commence par les formes simples.

- **1. Apprendre à Dessiner un Carré :**
  - Dans `main.js`, écris une petite fonction qui dessine un simple carré rempli sur le canvas. Ce sera l'unité de base pour notre grille, le serpent, et la nourriture.

- **2. Créer une Grille (Conceptuelle) :**
  - Le jeu se base sur une grille (par ex, 20x20 carrés). Décide de la taille de ta grille et de la taille de chaque "carré" (cellule).
  - Tu n'as pas besoin de dessiner la grille, mais il faut penser en termes de coordonnées de grille (ex: la case en haut à gauche est `(0, 0)`).

---

### Étape 2 : Le Serpent Prend Vie

Donnons vie à notre personnage principal.

- **1. Représenter le Serpent :**
  - Le serpent n'est qu'une liste de positions sur la grille. Commence avec un serpent de 3 carrés de long. Par exemple, aux positions `[(5, 5), (4, 5), (3, 5)]`. La première position est la tête.

- **2. Dessiner le Serpent :**
  - Crée une fonction qui parcourt cette liste et utilise ta fonction "dessiner un carré" pour afficher chaque segment du serpent sur le canvas.

- **3. Mettre en Place la Boucle de Jeu :**
  - Il faut que le jeu se rafraîchisse en permanence. Dans `main.js`, mets en place une "boucle" (avec `requestAnimationFrame`) qui s'exécute en continu. Pour l'instant, cette boucle ne fera qu'effacer le canvas et redessiner le serpent à sa position de départ.

---

### Étape 3 : Le Mouvement

Faisons bouger le serpent.

- **1. Gérer la Direction :**
  - Crée une variable pour stocker la direction actuelle du serpent (par exemple, "droite").

- **2. Calculer la Prochaine Position :**
  - Dans la boucle de jeu, avant de dessiner, calcule la nouvelle position de la tête en fonction de la direction. Si la direction est "droite", la nouvelle tête sera à la position `(x+1, y)`.

- **3. Faire Avancer le Serpent :**
  - Pour faire bouger le serpent, c'est simple :
    - Ajoute la nouvelle position de la tête au début de la liste du corps.
    - Retire le dernier segment de la queue.
  - Le serpent a maintenant l'air d'avancer d'une case !

- **4. Contrôler le Serpent :**
  - Ajoute un écouteur d'événements (`keydown`) pour les touches fléchées du clavier.
  - Quand une touche est pressée, change la variable de direction.
  - **Important :** Empêche le serpent de faire demi-tour. S'il va à droite, il ne peut pas aller à gauche directement.

---

### Étape 4 : La Nourriture et le Score

Donnons un but au serpent.

- **1. Placer la Nourriture :**
  - Choisis une position aléatoire sur la grille pour la nourriture.
  - Dessine un carré (d'une autre couleur) à cette position.

- **2. Détecter la "Collision" :**
  - Dans la boucle de jeu, vérifie si la position de la tête du serpent est la même que celle de la nourriture.

- **3. Faire Grandir le Serpent :**
  - Si le serpent mange la nourriture :
    - **Ne retire pas** le dernier segment de la queue lors de ce tour de boucle. Le serpent grandit d'un carré !
    - Trouve une nouvelle position aléatoire pour la nourriture.

- **4. Mettre en Place le Score :**
  - Crée une variable `score`.
  - Chaque fois que le serpent mange, augmente le score.
  - Affiche ce score quelque part sur la page (dans un `<div>` en HTML, c'est le plus simple).

---

### Étape 5 : Les Règles et la Fin

Un jeu a besoin de règles.

- **1. Détecter la Fin du Jeu :**
  - La partie est perdue si :
    - La tête du serpent touche l'un des bords du canvas.
    - La tête du serpent touche l'un des segments de son propre corps.

- **2. Gérer le "Game Over" :**
  - Si la partie est perdue, arrête la boucle de jeu.
  - Affiche un message "Game Over" au milieu de l'écran.

- **3. Permettre de Rejouer :**
  - Ajoute un bouton "Recommencer".
  - Quand on clique dessus, réinitialise toutes les variables (position du serpent, score, etc.) et relance la boucle de jeu.

---

### Et Après ?

Une fois que tu as tout ça, ton jeu est fonctionnel ! Tu peux ensuite l'améliorer :
- Augmenter la vitesse quand le score augmente.
- Ajouter un écran de démarrage.
- Changer les couleurs ou les "skins".
 sxcdvfhj, 