let wszystkieZgody = document.getElementById("wszystkie-zgody");

function wszystkieZgodyChange() {
    let zgodaPierwsza = document.getElementById("zgoda-marketingowa-1");
    let zgodaDruga = document.getElementById("zgoda-marketingowa-2");
    
//    console.log(zgoda2);
//    console.log(wszystkieZgody.checked);
    
    if (wszystkieZgody.checked) {
        zgodaPierwsza.checked = true;
        zgodaDruga.checked = true;
        zgodaPierwsza.setAttribute("disabled", "");
        zgodaDruga.setAttribute("disabled", "");
    } else { 
        zgodaPierwsza.checked = false;
        zgodaDruga.checked = false;
        zgodaPierwsza.removeAttribute("disabled");
        zgodaDruga.removeAttribute("disabled");
    }
}

wszystkieZgody.addEventListener("change", wszystkieZgodyChange);
//document.getElementById("formularz").addEventListener("submit", waliduj);

function waliduj(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let zgoda1 = document.getElementById("zgoda-marketingowa-1").value;
    
    //ZROBIĆ PARAGRAFY
    
    if(name == '') {
        document.getElementById("wiadomosc").innerHTML="<li>wpisz imie</li>"; //UCHWYT
        
console.log("cos");
    }

};

let formularz = document.getElementById("formularz");
//formularz.addEventListener("submit", wszystkieZgodyChange);

//wszystkieZgody.onchange = stanCheckboxa