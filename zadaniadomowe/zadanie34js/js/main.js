let firstString = "Uwielbiam JavaScript";
let secondString = "Jestem świetnym programistą";

function longerString (firstString, secondString) {
    if (firstString.length > secondString.length) {
        return firstString;
    } else {
        return secondString;
    }
}

console.log(longerString(firstString, secondString));

