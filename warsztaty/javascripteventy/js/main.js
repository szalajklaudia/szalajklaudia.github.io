'use strict';

function napisz() {
    console.log("kliknięto");
}

let buttonKlik = document.getElementById("klik");
buttonKlik.addEventListener('click', napisz);
//bez nawiasów, żeby funkcja się mogła wywołać gdy ktoś kliknie


//innerHTML vs outerHTML
//innerHTML - pobiera tylko wnętrze np. containera
//outerHTML - pobiera wszystko, razem z nazwą containera