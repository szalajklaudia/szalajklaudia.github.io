//Napisz klasę opisującą samochody. Pola klasy: VIN, marka, model, silnik, pojemnosc silnika, kolor, rok produkcji, uszkodzony (boolean), wymienić mu silnik - rodzaj paliwa, pojemność, właściciel - Imię i nazwisko; sprzedac auto - imie i nazwisko wlasciciela;
class Auto {
    constructor(vin, marka, model, rodzajPaliwa, pojemnoscSilnika, rokProdukcji, wlasciciel = "producent", uszkodzony = "false") {
        this.vin = vin;
        this.marka = marka;
        this.model = model;
        this.rodzajPaliwa = rodzajPaliwa;
        this.pojemnoscSilnika = pojemnoscSilnika;
        this.rokProdukcji = rokProdukcji;
        this.wlasciciel = wlasciciel;
        this.uszkodzony = uszkodzony;
    }
    
    zepsuj() {
        this.uszkodzony = true;
    }
    
    napraw() {
        this.uszkodzony = false;
    }    
    wymienicSilnik(rodzajPaliwa, pojemnoscSilnika) {
        this.rodzajPaliwa = nowyRodzajPaliwa;
        this.pojemnoscSilnika = nowaPojemnoscSilnika;
    }
    
    sprzedaj(nowyWlasciciel) {
        this.wlasciciel = nowyWlasciciel
    }
}

let autoJulki = new Auto("1234567890", "Audi", "R8", "benzyna", "5200", "2017", wlasciciel = "Julka", uszkodzony = "false");

autoJulki.sprzedaj("Julka Golanska");
autoJulki.zepsuj();
autoJulki.napraw();
autoJulki.sprzedaj("Sabina Decowska");

let autoKubyKe = new Auto("09876543ff210", "Nissan", "GTR", "benzyna", 3800, 2018);

//parkowanie samochodów z klasy w tablicy garaż
let garaz = [];
garaz[0] = autoJulki;
garaz[1] = autoKubyKe;

console.log(garaz);