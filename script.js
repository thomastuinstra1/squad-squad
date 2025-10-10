(function () {
    const FULL_SRC = 'Images/hartje.png';
    const EMPTY_SRC = 'Images/hartje3.png';

    const livesContainer = document.getElementById('lives');
    if (!livesContainer) return; // Stop als er geen hartjes-container is

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

            // ✅ Controleer of alle levens op zijn
            if (lives === 0) {
                setTimeout(() => {
                    window.location.href = eindpagina.html;
                }, 500); // kleine vertraging zodat het laatste hartje kan veranderen
            }
        }
    }

    if (btn) {
        btn.addEventListener('click', function () {
            btn.disabled = true;
            loseLife();

            if (lives > 0) {
                setTimeout(() => {
                    window.location.href = uitlegPagina.html;
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
