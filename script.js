const UX_element = document.getElementById('UX_element');
const pagina2 = document.getElementById('pagina2');
const resetScoreBtn = document.getElementById("resetScore");

const savedScore = localStorage.getItem("test");

let pointsplayer1 = document.getElementById('test');
let scoreDisplay = document.getElementById('scoreDisplay');

let playerPoints = [
    {id: 'test', currentPoints: parseInt(localStorage.getItem("test")) || 0 }
];

function updateScoreboard() {
    if (pointsplayer1) {
        pointsplayer1.textContent = "Test: " + playerPoints[0].currentPoints;
    }
    if (scoreDisplay) {
    scoreDisplay.textContent = "Test: " + playerPoints[0].currentPoints;
    }
}

if (UX_element) {
    UX_element.addEventListener("click", function() {
    playerPoints[0].currentPoints += 1;
    updateScoreboard();
    localStorage.setItem("test", playerPoints[0].currentPoints);
    window.location.href = "test.html";
});
}

if (pagina2) {
    pagina2.addEventListener("click", function() {
    playerPoints[0].currentPoints += 1;
    updateScoreboard();
    localStorage.setItem("test", playerPoints[0].currentPoints);
});
}

if (resetScoreBtn) {
  resetScoreBtn.addEventListener("click", function() {
    localStorage.removeItem("test");
    playerPoints[0].currentPoints = 0;
    updateScoreboard();
  });
}

document.getElementById("scoreDisplay").textContent =
"Test: " + (savedScore ?? 0);

updateScoreboard();