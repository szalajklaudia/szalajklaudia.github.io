'use strict';

function napisz() {
    let imieFormularz = document.getElementById("name").value;
    let nazwiskoFormularz = document.getElementById("surname").value;
    console.log(imieFormularz);
    console.log(nazwiskoFormularz);
}

forma1.addEventListener('onsubmit', napisz);


