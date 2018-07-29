let sekcjaJeden = document.getElementById("parFirst");

let btnKliknijMnie = document.createElement("button");

let txtKliknijMnie = document.createTextNode("Kliknij Button");

let classKliknijMnie = document.createAttribute("class");
//

classKliknijMnie.value = "button";
btnKliknijMnie.setAttribute("id", "main-button");

btnKliknijMnie.appendChild(txtKliknijMnie);
btnKliknijMnie.setAttributeNode(classKliknijMnie);

//appendChild - wrzuca na koniec diva HTML'a
sekcjaJeden.insertBefore(btnKliknijMnie, sekcjaJeden.childNodes[5]);

//Element.insertAdjacent


console.log(sekcjaJeden.childNodes[5]);

//console.log(sekcjaJeden.childNodes);