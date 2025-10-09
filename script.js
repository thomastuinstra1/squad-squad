const UX_element = document.getElementById('UX_element');
const pagina2 = document.getElementById('pagina2');
let pointsplayer1 = document.getElementById('test');

let playerPoints = [
    {id: 'test', currentPoints: 0}
];


function updateScoreboard() {
    pointsplayer1.textContent = "Test: " + playerPoints[0].currentPoints;
}

if (UX_element) {
document.getElementById("UX_element").addEventListener("click", function() {
    playerPoints[0].currentPoints += 1;
    updateScoreboard();
    localStorage.setItem("test", playerPoints[0].currentPoints);
    window.location.href = "test.html";
});
}

if (pagina2) {
document.getElementById("UX_element").addEventListener("click", function() {
    playerPoints[0].currentPoints += 1;
    updateScoreboard();
    localStorage.setItem("test", playerPoints[0].currentPoints);
});
}
