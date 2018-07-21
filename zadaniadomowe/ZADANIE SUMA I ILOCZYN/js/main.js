function sumaOrazIloczyn(parametr) {
    
    let tablica = [];
    tablica = parametr;

    let suma = 0;
    let iloczyn = 1;

    
    for (let i = 0; i < tablica.length; i++) {
       suma = suma + tablica[i];
       iloczyn = iloczyn * tablica[i];
     }

    
    console.log("Suma liczb: " + suma + "." + " Iloczyn liczb: " + iloczyn + ".");
}

sumaOrazIloczyn([1, 2, 3, 4, 5, 6]);




