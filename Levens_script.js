const FULL_SRC = '../Images/hartje.png';
const EMPTY_SRC = '../Images/hartje3.png';
const REDIRECT_URL = 'uitlegPagina.html';
const END_URL = 'Eindpagina.html';

const startBtn = document.getElementById("Start");
const livesContainer = document.getElementById('lives');
const livesImgs = livesContainer ? Array.from(livesContainer.querySelectorAll('img')) : [];
const btn = document.getElementById('loseLifeBtn');
const resetBtn = document.getElementById('resetBtn');
const livesCountEl = document.getElementById('livesCount');

const MAX_LIVES = livesImgs.length;

const levels = [
  "UX_pagina/gamePagina.html",
  "UX_pagina/gamePagina1.html",
  "UX_pagina/gamePagina2.html",
  "UX_pagina/gamePagina3.html",
  "UX_pagina/gamePagina4.html",
  "UX_pagina/gamePagina5.html",
  "UX_pagina/gamePagina6.html",
  "UX_pagina/gamePagina7.html",
  "UX_pagina/gamePagina8.html",
  "UX_pagina/gamePagina9.html",
  "UX_pagina/Index.html",
  "UX_pagina/pagina_2.html",
  "UX_pagina/pagina_3.html",
  "UX_pagina/pagina_4.html",
  "UX_pagina/pagina_5.html",
  "UX_pagina/pagina_6.html",
  "UX_pagina/pagina_7.html",
  "UX_pagina/pagina_8.html",
  "UX_pagina/pagina_9.html",
  "UX_pagina/pagina_10.html",
  "UX_pagina/search-engine.html",
  "UX_pagina/search-engine1.html",
  "UX_pagina/search-engine2.html",
  "UX_pagina/search-engine3.html",
  "UX_pagina/search-engine4.html",
  "UX_pagina/search-engine5.html",
  "UX_pagina/social-media-pagina.html",
  "UX_pagina/social-media-pagina1.html",
  "UX_pagina/social-media-pagina2.html",
  "UX_pagina/social-media-pagina3.html",
  "UX_pagina/social-media-pagina4.html",
  "UX_pagina/social-media-pagina5.html"
];

let lastLevel = null;

let lives = parseInt(localStorage.getItem('lives'), 10);
if (isNaN(lives)) {
    lives = MAX_LIVES;
    localStorage.setItem('lives', lives);
}

function renderLives() {
    livesImgs.forEach((img, index) => {
        if (index < lives) {
            img.src = FULL_SRC;
            img.dataset.state = 'full';
            img.alt = `Leven ${index + 1} (vol)`;
        } else {
            img.src = EMPTY_SRC;
            img.dataset.state = 'empty';
            img.alt = `Leven ${index + 1} (verloren)`;
        }
    });

    if (livesCountEl) {
        livesCountEl.textContent = lives;
    }
}

function resetLives() {
    lives = MAX_LIVES;
    localStorage.setItem('lives', lives);
    renderLives();
    if (btn) btn.disabled = false;
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

function goToRandomLevel() {
  let randomLevel;

  do {
    randomLevel = levels[Math.floor(Math.random() * levels.length)];
  } while (randomLevel === lastLevel && levels.length > 1);

  lastLevel = randomLevel;
  window.location.href = randomLevel;
}

if (btn) {
    btn.addEventListener('click', () => {
        Swal.fire({
            title: "Weet je het zeker?",
            text: "Weet je zeker dat je wilt opgeven?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ja, ik geef op",
            cancelButtonText: "Nee, verder spelen",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                btn.disabled = true;
                loseLife();

                if (lives > 0) {
                    setTimeout(() => {
                        window.location.href = REDIRECT_URL;
                    }, 300);
                }
            }
        });
    });
}

if (resetBtn) {
    resetBtn.addEventListener('click', resetLives);
}

if (startBtn) {
    startBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

renderLives();
