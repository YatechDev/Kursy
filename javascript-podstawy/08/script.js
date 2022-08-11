const firstName = "Jan";
const lastName = "Kowalski";

if(firstName === "Maciej" && lastName === "Kowalski") {
    console.log("Imię to Maciej, nazwisko to Kowalski");
} else {
    console.log("Imię to nie Maciej");
}

if(firstName === "Maciej" || lastName === "Kowalski") {
    console.log("Imię to Maciej lub nazwisko to Kowalski");
}

const name = "";

if (!name) {
    console.log("Imię nie zostało podane");
}

