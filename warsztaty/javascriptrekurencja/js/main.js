'use strict';

//REKURENCJA - WYWOŁYWANIE FUNKCJI W FUNKCJI, ALE JEST ZASOBO-ŻERNA, STOSOWANA DO SKOŃCZONYCH FUNKCJI.

//Napisz funkcję która oblicza silnię n. Funkcja przyjmuje parametr n i zwraca wynik - silnia n(n!)
// silnia 3! = 1*2*3

console.log("silnia!");

function obliczanieSilni (n) {
    
    let wynik = 1;
    if (n < 0) {
        return "Silnia od ujemnej liczby nie istnieje." ;
    } else if (n < 2) {
        return wynik;
    }
    //obsluga silni:
    wynik = n * obliczanieSilni(n-1);
    return wynik;
}

let wynikObliczaniaSilni = obliczanieSilni(6);
console.log(wynikObliczaniaSilni);


/* SPOSÓB PĘTLĄ FOR

for(let i = 1; i<=n; ++i) {
wynik = wynik * i;
}

for(n; n>0; --n) {
wynik = wynik * n;
} 