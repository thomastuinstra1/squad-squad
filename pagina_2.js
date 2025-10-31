function verzendFormulier(e) {
e.preventDefault();
const naam = document.getElementById('naam').value;
alert(`Bedankt, ${naam}! Je bericht is verzonden.`);
e.target.reset();
}