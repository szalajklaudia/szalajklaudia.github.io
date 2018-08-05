'use strict';

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
	let oprocentowanieOpodatkowane = 0;
	//sprawdzam czy jeżeli jest checked to mam odjąć 19%
	if (podatek == true) {
		oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19); 
	} else {
		oprocentowanieOpodatkowane = oprocentowanie;
	}
	//Math.pow - Math.pow(7,2); 49
	let kapital = wplata * Math.pow(1 + (oprocentowanieOpodatkowane / okresKapitalizacji), iloscLat * okresKapitalizacji );
    //parseFloat - zwraca liczbę zmiennoprzecinkową czyli liczbę rzeczywistą zapisaną w notacji naukowej;
    //toFixed - zamienia liczbę w stringa i zaokrągla liczbę;
	return parseFloat(kapital).toFixed(2);
    
}

function oblicz() {
    //parseInt - zwraca liczbę całkowitą o podanej podstawie np. dziesiętną, ósemkową
    let wplata = parseInt(document.getElementById('wplata').value);
    let iloscLat = parseInt(document.getElementById('ilosc-lat').value);
    let okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value);
    let oprocentowanie = parseInt(document.getElementById('oprocentowanie').value) / 100;
    let podatek = document.getElementById('podatek').checked;
	let wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);	
    
    document.getElementById('wynik').innerHTML = wynik;
	
}
