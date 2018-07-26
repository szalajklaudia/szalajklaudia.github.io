'use strict';

console.log('Akademia108');

function liczbaDoPotegi (number) {
    let wynik = 1;
    for(let i=0; i<3; i++) {
    wynik = wynik * number;        
    }

    return wynik;
    
}

let wynikPotegowania = liczbaDoPotegi(2);

console.log(wynikPotegowania);

console.log(liczbaDoPotegi(3));

//co podnosimy i do której potegi