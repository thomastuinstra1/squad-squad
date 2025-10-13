const UX_element = document.getElementById('UX_element');
const pagina2 = document.getElementById('pagina2');
const resetBtn = document.getElementById("resetScore");

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

if (resetBtn) {
  resetBtn.addEventListener("click", function() {
    localStorage.removeItem("test");
    playerPoints[0].currentPoints = 0;
    updateScoreboard();
  });
}

document.getElementById("scoreDisplay").textContent =
"Test: " + (savedScore ?? 0);

updateScoreboard();



(function () {
    const FULL_SRC = 'Images/hartje.png';
    const EMPTY_SRC = 'Images/hartje3.png';
    const REDIRECT_URL = 'uitlegPagina.html';
    const END_URL = 'eindpagina.html';

    const livesContainer = document.getElementById('lives');
    if (!livesContainer) return; 

    const livesImgs = Array.from(livesContainer.querySelectorAll('img'));
    const MAX_LIVES = livesImgs.length;

    const btn = document.getElementById('loseLifeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const livesCountEl = document.getElementById('livesCount');

    let lives = parseInt(localStorage.getItem('lives'), 10);
    if (isNaN(lives)) {
        lives = MAX_LIVES;
        localStorage.setItem('lives', lives);
    }

    function renderLives() {
        for (let i = 0; i < MAX_LIVES; i++) {
            if (i < lives) {
                livesImgs[i].src = FULL_SRC;
                livesImgs[i].dataset.state = 'full';
                livesImgs[i].alt = `Leven ${i + 1} (vol)`;
            } else {
                livesImgs[i].src = EMPTY_SRC;
                livesImgs[i].dataset.state = 'empty';
                livesImgs[i].alt = `Leven ${i + 1} (verloren)`;
            }
        }
        if (livesCountEl) {
            livesCountEl.textContent = lives;
        }
    }

    function resetLives() {
        lives = MAX_LIVES;
        localStorage.setItem('lives', lives);
        renderLives();
    }

    function loseLife() {
        if (lives > 0) {
            lives--;
            localStorage.setItem('lives', lives);
            renderLives();

            if (lives === 0) {
                setTimeout(() => {
                    window.location.href = END_URL;
                }, 500);
            }
        }
    }

    if (btn) {
        btn.addEventListener('click', function () {
            const confirmGiveUp = confirm("Weet je zeker dat je wilt opgeven?");

            if (!confirmGiveUp) {
                return; 
            }

            btn.disabled = true;
            loseLife();

            if (lives > 0) {
                setTimeout(() => {
                    window.location.href = REDIRECT_URL;
                }, 300);
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', function () {
            resetLives();
            if (btn) btn.disabled = false;
        });
    }

    renderLives();
})();
