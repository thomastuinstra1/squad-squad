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

function goToRandomLevel() {
  let randomLevel;

  do {
    randomLevel = levels[Math.floor(Math.random() * levels.length)];
  } while (randomLevel === lastLevel && levels.length > 1);

  lastLevel = randomLevel;
  window.location.href = randomLevel;
}