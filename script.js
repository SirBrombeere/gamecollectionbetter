// Liste der Spiele
const games = [
    { name: "Gamecollection", file: "gamecollection.html" },
    { name: "Game 2", file: "games/game2.html" },
    { name: "Game 3", file: "games/game3.html" }
];

const gamesList = document.getElementById('games-list');
const launcher = document.getElementById('launcher');
const gameContainer = document.getElementById('game-container');
const gameFrame = document.getElementById('game-frame');
const backBtn = document.getElementById('backBtn');

// Dynamisch Buttons erzeugen
games.forEach(game => {
    const btn = document.createElement('button');
    btn.textContent = game.name;
    btn.className = 'game-btn';
    btn.addEventListener('click', () => launchGame(game.file));
    gamesList.appendChild(btn);
});

// Spiel starten
function launchGame(file) {
    launcher.style.display = 'none';
    gameContainer.style.display = 'block';
    backBtn.style.display = 'block';
    gameFrame.src = file;
}

// Zurück zur Sammlung
backBtn.addEventListener('click', () => {
    gameFrame.src = '';
    gameContainer.style.display = 'none';
    backBtn.style.display = 'none';
    launcher.style.display = 'block';
});
