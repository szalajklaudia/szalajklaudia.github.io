'use strict';

function operations(num1, num2) {
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;

    if (addition >= 0) {
        console.log("Wynik dodawania wynosi " + addition);
    } else {
        console.log("Wynik jest ujemny");        
    };
    
    if (subtraction >= 0) {
        console.log("Wynik odejmowania wynosi " + subtraction);
    } else {
        console.log("Wynik jest ujemny");        
    };
    
    if (addition >= 0) {
        console.log("Wynik mnożenia wynosi " + multiplication);
    } else {
        console.log("Wynik jest ujemny");        
    }

}

operations(60,-43);
//operations(100,20);
operations(-98,11);