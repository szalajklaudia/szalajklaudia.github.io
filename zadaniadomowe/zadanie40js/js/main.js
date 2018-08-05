function pobierzDane() {
    let imie = document.getElementById("im");
    let nazwisko = document.getElementById("naz");
    let telefon = document.getElementById("tel");
    let daneImie = document.getElementById("name");
    let daneNazwisko = document.getElementById("surname");
    let daneTel = document.getElementById("phone");
 daneImie.textContent = imie.value;
 daneNazwisko.textContent = nazwisko.value;
 daneTel.textContent = telefon.value;
}
let button = document.querySelector("button");
button.onclick = pobierzDane;