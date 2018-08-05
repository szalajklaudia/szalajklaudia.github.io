let paragraf = document.getElementById("tekst");
let napisz = document.querySelector('#dodaj');
let wymaz = document.querySelector('#usun');
function napis() {
    paragraf.textContent = "Akademia 108";
}
function kasuj() {
paragraf.textContent = "";
}
napisz.onclick = napis;
wymaz.onclick = kasuj;