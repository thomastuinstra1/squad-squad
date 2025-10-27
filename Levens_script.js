(function () {
    const FULL_SRC = 'Images/hartje.png';
    const EMPTY_SRC = 'Images/hartje3.png';
    const END_URL = 'Eindpagina.html';

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

    let redirectCount = parseInt(localStorage.getItem('redirectCount') || '0', 10);

    function renderLives() {
        for (let i = 0; i < MAX_LIVES; i++) {
            if (i < lives) {
                livesImgs[i].src = FULL_SRC;
                livesImgs[i].dataset.state = 'full';
                livesImgs[i].alt = Leven ${i + 1} (vol);
            } else {
                livesImgs[i].src = EMPTY_SRC;
                livesImgs[i].dataset.state = 'empty';
                livesImgs[i].alt = Leven ${i + 1} (verloren);
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
                    let REDIRECT_URL = '';

                    if (redirectCount === 0) {
                    REDIRECT_URL = 'uitlegPagina2.html';
                    } else if (redirectCount === 1) {
                    REDIRECT_URL = 'uitlegPagina.html';
                    } else if (redirectCount === 2) {
                    REDIRECT_URL = 'uitlegPagina3.html';
                    } else {
                    REDIRECT_URL = 'uitlegPagina4.html';
                    }


                            localStorage.setItem('redirectCount', (redirectCount + 1) % 2);

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