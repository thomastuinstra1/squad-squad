const CONFIG = {
  FULL_SRC: '../Images/hartje.png',
  EMPTY_SRC: '../Images/hartje3.png',
  REDIRECT_URL: '../voor/uitlegPagina.html',
  END_URL: '../voor_eind_pagina/eindpagina.html',
  START_URL: '../voor_eind_pagina/Voorpagina.html'
};

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
  "../UX_pagina/pagina_2.html",
  "../UX_pagina/pagina_3.html",
  "../UX_pagina/pagina_4.html",
  "../UX_pagina/pagina_5.html",
  "../UX_pagina/pagina_6.html",
  "../UX_pagina/pagina_7.html",
  "../UX_pagina/pagina_8.html",
  "../UX_pagina/pagina_9.html",
  "../UX_pagina/pagina_10.html",
  "../UX_pagina/search-engine1.html",
  "../UX_pagina/search-engine2.html",
  "../UX_pagina/search-engine3.html",
  "../UX_pagina/search-engine4.html",
  "../UX_pagina/search-engine5.html",
  "../UX_pagina/social-media-pagina1.html",
  "../UX_pagina/social-media-pagina2.html",
  "../UX_pagina/social-media-pagina3.html",
  "../UX_pagina/social-media-pagina4.html",
  "../UX_pagina/social-media-pagina5.html",
  "../UX_pagina/wiki_pagina1.html",
  "../UX_pagina/wiki_pagina2.html",
  "../UX_pagina/wiki_pagina3.html",
  "../UX_pagina/wiki_pagina4.html",
  "../UX_pagina/wiki_pagina5.html",
];

const uitlegPerPagina = {
  "wiki_pagina1.html":"Helaas! Hier moest je de titel van het artikel klikken, want die stond in een ander lettertype.",
  "gamePagina.html":"Helaas!Hier moest je de titel klikken, de titel had geen schaduw waardoor hij een andere stijl is dan de rest van de pagina.",
  "gamePagina1.html":"Helaas! De titel heeft een compleet ander lettertype dan de rest.",
  "gamePagina2.html":"Helaas! De border van de exit knop is veel te groot.",
  "gamePagina3.html":"Helaas! De footer was hier veel te groot.",
  "gamePagina4.html":"Helaas! Hier is de knop onduidelijk, wat betekent klik hier voor iets.",
  "gamePagina5.html":"Helaas! De opties knop staat hier in een andere taal.",
  "gamePagina6.html":"Helaas! Hier was de fout de titel, de spacing was veel te groot tussen de letters.",
  "gamePagina7.html":"Helaas! Het blok heeft dezelfde kleur als de knoppen, waardoor je de knoppen niet kan zien.",
  "gamePagina8.html":"Helaas! De exit knop heeft geen tekst er bij staan waardoor het onduidelijk is.",
  "gamePagina9.html":"Helaas! De load game knop is kleiner dan de rest. ",
  "search-engine1.html":"Helaas! De tekst in de zoekknop is erg klein.",
  "search-engine2.html":"Helaas! De border om de zoekbalk is niet zichtbaar.",
  "search-engine3.html":"Helaas! Het woord SEARCH is een ander lettertype dan de rest van de titel.",
  "search-engine4.html":"Helaas! De zoekknop is in het Nederlands, de rest van de tekst is in het Engels.",
  "search-engine5.html":"Helaas! Het woord Simpel in de titel is in het Nederlands, de rest is in het Engels.",
  "social-media-pagina1.html":"Helaas! De post knop is onduidelijk omdat de knop dezelfde kleur heeft als de achtergrond.",
  "social-media-pagina2.html":"Helaas! De namen vallen weg op de achtergrond en zijn bijna onzichtbaar.",
  "social-media-pagina3.html":"Helaas! Notificaties zijn bijna onzichtbaar en vallen weg op de achtergrond.",
  "social-media-pagina4.html":"Helaas! De knop Berichten doet niks, de rest van de snelkoppelingen wel.",
  "social-media-pagina5.html":"Helaas! Je moet 2 keer klikken om te posten, er zit een timer op waardoor het gebruiksonvriendelijk is.",
  "Index.html":"Helaas! De inlog knop is veel te klein, waardoor de tekst inloggen niet goed leesbaar is.",
  "pagina_2.html":"Helaas! Het kopje over mij is te klein. Het hoort even groot te zijn als de andere kopjes.",
  "pagina_3.html":"Helaas! Het wachtwoord is zichtbaar terwijl die onzichtbaar moet wezen.",
  "pagina_4.html":"Helaas! Er wordt niet uitgelegd waarom het inloggen mislukt is.",
  "pagina_5.html":"Helaas! Het woord Bericht heeft een lichtere kleur, waardoor hij wegvalt in de achtergrond.",
  "pagina_6.html":"Helaas! Het is niet duidelijk naar welke pagina je gaat als je op het woord Iets klikt.",
  "pagina_7.html":"Helaas! De titel valt weg, omdat de kleur van de titel overeenkomt met de achtergrondkleur.",
  "pagina_8.html":"Helaas! Het is niet duidelijk wat de knop iets doet.",
  "pagina_9.html":"Helaas! De ruimte tussen wachtwoord vergeten en Maak een nieuw account is veel te klein.",
  "pagina_10.html":"Helaas! Het woord wachtwoord heeft een ander lettertype, waardoor het niet bij de rest van de pagina past.",
  "wiki_pagina1.html":"Helaas! Het Wikipedia logo staat niet in de header.", 
  "wiki_pagina2.html":"Helaas! Het staat in de verkeerde taal. Dit had engels moeten zijn.", 
  "wiki_pagina3.html":"Helaas! De pagina is gekrompen. Dit zorgt ervoor dat de tekst knel staat.", 
  "wiki_pagina4.html":"Helaas! Het verkeerde kopje in de header is aangeklikt.", 
  "wiki_pagina5.html":"Helaas! De container is verschoven naar rechts.", 
};

const goedGeluid = new Audio('../Muziek/Goed.mp3');
const foutGeluid = new Audio('../Muziek/Fout.mp3');

function speelGeluid(isCorrect) {
    if(isCorrect) {
        goedGeluid.play();
    } else {
        foutGeluid.play();
    }
}

document.addEventListener('DOMContentLoaded', async () => {

  let popupOverlay, popupBox, uitlegText, nextButton;

  const hudContainer = document.getElementById('hud-container');
  if (hudContainer) {
    try {
      const response = await fetch('../hud.html');
      const hudHTML = await response.text();
      hudContainer.innerHTML = hudHTML;

      popupOverlay = document.getElementById('popupOverlay');
      popupBox = document.getElementById('popupBox');
      uitlegText = document.getElementById('uitlegText');
      nextButton = document.getElementById('nextButton');

      window.showPopup = function(message, type) {
        if (!uitlegText || !popupBox || !popupOverlay) return;
        uitlegText.innerText = message;
        popupBox.classList.remove('correct', 'mistake');
        if (type === 'correct') popupBox.classList.add('correct');
        if (type === 'mistake') popupBox.classList.add('mistake');
        popupOverlay.classList.remove('hidden');

        if (type === 'correct') speelGeluid(true);
        if (type === 'mistake') speelGeluid(false);

        UI.toggleLoseLifeButton(false);
      };

      nextButton?.addEventListener('click', () => {
        popupOverlay.classList.add('hidden');

        UI.toggleLoseLifeButton(true);
      });

    } catch (err) {
      console.error('HUD kon niet worden geladen:', err);
    }
  }

  const elements = {
    startBtn: document.getElementById('Start'),
    nextButton: document.getElementById('nextButton'),
    loseLifeBtn: document.getElementById('loseLifeBtn'),
    resetBtn: document.getElementById('resetBtn'),
    retryBtn: document.getElementById('retryBtn'),
    livesContainer: document.getElementById('lives'),
    livesCount: document.getElementById('livesCount')
  };


  const livesImgs = elements.livesContainer
    ? Array.from(elements.livesContainer.querySelectorAll('img'))
    : [];

  const MAX_LIVES = livesImgs.length > 0 ? livesImgs.length : 3;

  const GameState = {
    
    lives: (function() {
      const saved = parseInt(localStorage.getItem('lives'), 10);
      return (Number.isInteger(saved) && saved >= 0) ? saved : MAX_LIVES;
    })(),
    lastLevel: localStorage.getItem('lastLevel') || null,

    points: (function() {
        const saved = parseInt(localStorage.getItem('points'), 10);
        return (Number.isInteger(saved) && saved >= 0) ? saved : 0;
    })(),

    addPoints(amount = 1) {
        this.points += amount;
        localStorage.setItem('points', this.points);
        UI.updatePoints();
    },

    resetPoints() {
        this.points = 0;
        localStorage.setItem('points', this.points);
        UI.updatePoints();
    },

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

        speelGeluid(false); 
        

      const onLevelPage = window.location.pathname.includes('UX_pagina');

      if (this.lives === 0 && onLevelPage) {
        const currentPage = window.location.pathname.split('/').pop();
        const uitleg = uitlegPerPagina[currentPage] || "Je hebt al je levens verloren. Goed geprobeerd!";

        if (typeof showPopup === 'function') {
          showPopup(uitleg, 'mistake');

          const nextHandler = () => {
            popupOverlay.classList.add('hidden');
            nextButton.removeEventListener('click', nextHandler);
            window.location.href = CONFIG.END_URL;
          };

          nextButton?.addEventListener('click', nextHandler);
        } else {
          alert(uitleg);
          window.location.href = CONFIG.END_URL;
        }
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

    toggleLoseLifeButton(visible) {
    const btn = elements.loseLifeBtn;
    if (!btn) return;

    if (visible) {
      btn.style.display = 'inline-block';
      btn.disabled = GameState.lives <= 0;
    } else {
      btn.style.display = 'none';
      btn.disabled = true;
    }
  },

   updatePoints() {
        const pointsElement = document.getElementById('pointsCount'); 
        if (pointsElement) {
            pointsElement.textContent = GameState.points !== undefined ? GameState.points : 0;
        }
    },


  async confirmGiveUp() {
    if (!elements.loseLifeBtn) return;

    const currentPage = window.location.pathname.split('/').pop();
    const uitleg = uitlegPerPagina[currentPage] || "Er is geen specifieke uitleg beschikbaar voor deze pagina.";

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

      showPopup(uitleg, 'mistake');

      const nextHandler = () => {
        popupOverlay.classList.add('hidden');
        nextButton.removeEventListener('click', nextHandler);

        if (GameState.lives > 0) {
          setTimeout(() => GameState.nextRandomLevel(), 300);
        } else {
          window.location.href = CONFIG.END_URL;
        }
      };

      nextButton.addEventListener('click', nextHandler);
    }
  }
}


  if (elements.startBtn) {
    elements.startBtn.addEventListener('click', () => GameState.nextRandomLevel());
  }

  if (elements.nextButton) {
    elements.nextButton.addEventListener('click', () => GameState.nextRandomLevel());
  }

  if (elements.retryBtn) {
    elements.retryBtn.addEventListener('click', () => window.location.href = CONFIG.START_URL);
  }

  if (elements.loseLifeBtn) {
    elements.loseLifeBtn.addEventListener('click', () => UI.confirmGiveUp());
  }

  if (elements.resetBtn) {
    elements.resetBtn.addEventListener('click', () => GameState.reset());
  }

  const onLevelPage = window.location.pathname.includes('UX_pagina');
  const onStartPage = window.location.pathname.includes('Voorpagina.html');

  if (onStartPage && GameState.lives <= 0) {
    GameState.reset();
    GameState.resetPoints();
  }

  UI.updateLives();
  UI.updatePoints(); 

  if (onLevelPage && GameState.lives <= 0) {
    window.location.href = CONFIG.END_URL;
  }

  const goedGeluid = new Audio('../Muziek/Goed.mp3');
    const foutGeluid = new Audio('../Muziek/Fout.mp3');

    function speelGeluid(isCorrect) {
        if (isCorrect) {
            goedGeluid.play();
            GameState.addPoints(1); 
        } else {
            foutGeluid.play();
        }
    }

  const randomButton = document.getElementById('randomButton');
  if (randomButton) {
    randomButton.addEventListener('click', () => GameState.nextRandomLevel());
  }

});
