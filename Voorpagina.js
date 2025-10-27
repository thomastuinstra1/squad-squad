const Start = document.getElementById("Start");
const MAX_LIVES = 3;

if (Start) {
    Start.addEventListener("click", function() {
    localStorage.setItem('lives', MAX_LIVES);
    localStorage.setItem('redirectCount', 0);
    window.location.href = "search-engine4.html";
  });
}