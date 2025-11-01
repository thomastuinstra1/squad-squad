/* ========== CONFIG ========== */
const CONFIG = {
  FULL_SRC: '../Images/hartje.png',         // hartje vol
  EMPTY_SRC: '../Images/hartje3.png',       // hartje leeg
  REDIRECT_URL: '../voor/uitlegPagina.html',
  END_URL: '../voor_eind_pagina/eindpagina.html',
  START_URL: '../voor_eind_pagina/Voorpagina.html'
};

/* ========== HELPERS: wacht tot DOM geladen is ========== */
document.addEventListener('DOMContentLoaded', () => {

  /* ========== ELEMENTEN ========== */
  const elements = {
    startBtn: document.getElementById('Start'),
    loseLifeBtn: document.getElementById('loseLifeBtn'),
    resetBtn: document.getElementById('resetBtn'),
    livesContainer: document.getElementById('lives'),
    livesCount: document.getElementById('livesCount')
  };

  /* ========== LIFE IMAGES & MAX_LIVES (met fallback) ========== */
  const livesImgs = elements.livesContainer
    ? Array.from(elements.livesContainer.querySelectorAll('img'))
    : [];

  const MAX_LIVES = livesImgs.length > 0 ? livesImgs.length : 3;

  /* ========== LEVELS ========== */
  const levels = [
    "../UX_pagina/gamePagina.html",
    "../UX_pagina/gamePagina1.html",
    "../UX_pagina/gamePagina2.html",
    "../UX_pagina/gamePagina3.html",
    "../UX_pagina/gamePagina4.html",
    "../UX_pagina/gamePagina5.html",
    "../UX_pagina/gamePagina6.html",
    "../UX_pagina/gamePagina7.html",
    "../UX_pagina/gamePagina8.html",
    "../UX_pagina/gamePagina9.html",
    "../UX_pagina/Index.html",
    "../UX_pagina/pagina_2.html",
    "../UX_pagina/pagina_3.html",
    "../UX_pagina/pagina_4.html",
    "../UX_pagina/pagina_5.html", 
    "../UX_pagina/pagina_6.html",
    "../UX_pagina/pagina_7.html",
    "../UX_pagina/pagina_8.html",
    "../UX_pagina/pagina_9.html",
    "../UX_pagina/pagina_10.html",
    "../UX_pagina/search-engine.html",
    "../UX_pagina/search-engine1.html",
    "../UX_pagina/search-engine2.html",
    "../UX_pagina/search-engine3.html",
    "../UX_pagina/search-engine4.html",
    "../UX_pagina/search-engine5.html",
    "../UX_pagina/social-media-pagina.html",
    "../UX_pagina/social-media-pagina1.html",
    "../UX_pagina/social-media-pagina2.html",
    "../UX_pagina/social-media-pagina3.html",
    "../UX_pagina/social-media-pagina4.html",
    "../UX_pagina/social-media-pagina5.html",
   ];
  /* ========== GAMESTATE ========== */
  const GameState = {
    lives: (function() {
      const saved = parseInt(localStorage.getItem('lives'), 10);
      return (Number.isInteger(saved) && saved >= 0) ? saved : MAX_LIVES;
    })(),
    lastLevel: localStorage.getItem('lastLevel') || null,

    save() {
      localStorage.setItem('lives', this.lives);
    },

    reset() {
      this.lives = MAX_LIVES;
      this.save();
      UI.updateLives();
      if (elements.loseLifeBtn) elements.loseLifeBtn.disabled = false;
    },

    loseLife() {
      if (this.lives <= 0) return;
      this.lives--;
      this.save();
      UI.updateLives();

      // Alleen redirect naar eindpagina als je op een levelpagina zit
      const onLevelPage = window.location.pathname.includes('UX_pagina');
      if (this.lives === 0 && onLevelPage) {
        setTimeout(() => window.location.href = CONFIG.END_URL, 500);
      }
    },

    nextRandomLevel() {
      if (!levels.length) return;
      let randomLevel;
      do {
        randomLevel = levels[Math.floor(Math.random() * levels.length)];
      } while (randomLevel === this.lastLevel && levels.length > 1);

      this.lastLevel = randomLevel;
      localStorage.setItem('lastLevel', randomLevel);
      window.location.href = randomLevel;
    }
  };

  /* ========== UI ========== */
  const UI = {
    updateLives() {
      if (!livesImgs.length) {
        if (elements.livesCount) elements.livesCount.textContent = GameState.lives;
        return;
      }

      livesImgs.forEach((img, i) => {
        const full = i < GameState.lives;
        img.src = full ? CONFIG.FULL_SRC : CONFIG.EMPTY_SRC;
        img.alt = `Leven ${i + 1} (${full ? 'vol' : 'leeg'})`;
        img.dataset.state = full ? 'full' : 'empty';
      });

      if (elements.livesCount) elements.livesCount.textContent = GameState.lives;

      if (elements.loseLifeBtn) {
        elements.loseLifeBtn.disabled = GameState.lives <= 0;
      }
    },

    async confirmGiveUp() {
      if (typeof Swal === 'undefined') {
        const ok = window.confirm('Weet je zeker dat je wilt opgeven?');
        if (!ok) return;
        elements.loseLifeBtn.disabled = true;
        GameState.loseLife();
        if (GameState.lives > 0) setTimeout(() => window.location.href = CONFIG.REDIRECT_URL, 300);
        return;
      }

      const result = await Swal.fire({
        title: 'Weet je het zeker?',
        text: 'Weet je zeker dat je wilt opgeven?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ja, ik geef op',
        cancelButtonText: 'Nee, verder spelen',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        elements.loseLifeBtn.disabled = true;
        GameState.loseLife();
        if (GameState.lives > 0) setTimeout(() => window.location.href = CONFIG.REDIRECT_URL, 300);
      }
    }
  };

  /* ========== EVENTS ========== */
  if (elements.startBtn) {
    elements.startBtn.addEventListener('click', () => GameState.nextRandomLevel());
  }

  if (retryBtn) {
  retryBtn.addEventListener('click', () => window.location.href = 'Voorpagina.html');
  }

  if (elements.loseLifeBtn) {
    elements.loseLifeBtn.addEventListener('click', () => UI.confirmGiveUp());
  }

  if (elements.resetBtn) {
    elements.resetBtn.addEventListener('click', () => GameState.reset());
  }

/* ========== INIT ========== */
const onLevelPage = window.location.pathname.includes('UX_pagina');
const onStartPage = window.location.pathname.includes('Voorpagina.html');

if (onStartPage && GameState.lives <= 0) {
    // Reset levens op startpagina zodat speler kan beginnen
    GameState.reset();
}

// Update UI altijd
UI.updateLives();

// Redirect naar eindpagina alleen op levelpagina als levens 0
if (onLevelPage && GameState.lives <= 0) {
    window.location.href = CONFIG.END_URL;
}


}); // end DOMContentLoaded
