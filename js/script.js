let userName = prompt("Benvenuto su Itaslow. Prego, inserisca il suo nome");
console.log("Questo è il nome dell'utente:" + " " + userName);

let userSurname = prompt("Inserisca il suo cognome");
console.log("Questo è il cognome dell'utente:" + " " + userSurname);

let userAge = parseInt(prompt("Inserisca la sua età espressa in numeri"));
if (isNaN(userAge)){
    alert ("Errore, si prega di ricaricare la pagina e inserire un valore numerico");
    location.reload();
}
console.log("Questo è l'età dell'utente:" + " " + userAge);

let km = parseInt(prompt("Inserisca i chilometri che vuole percorrere"));
if (isNaN(km)){
    alert ("Errore, si prega di ricaricare la pagina e inserire un valore numerico");
    location.reload();
}
console.log("Questi sono i chilometri che percorrerà l'utente:" + " " + km);

let ticketPrice = (km * 0.21);

if (userAge < 19) {
    ticketPrice = ((ticketPrice - (ticketPrice * 20) / 100));
    let = newTicketPrice = Math.round(ticketPrice * 100) / 100;
    console.log("Il costo del biglietto under 18 scontato è" + " " + newTicketPrice + "€");

} else if (userAge >= 65) {
    ticketPrice = ((ticketPrice - (ticketPrice * 40) / 100));
    let = newTicketPrice = Math.round(ticketPrice * 100) / 100;
    console.log("Il costo del biglietto over 65 scontato è:" + " " + newTicketPrice + "€");

} else {
    ticketPrice = ticketPrice;
    let = newTicketPrice = Math.round(ticketPrice * 100) / 100;
   console.log("Il costo del biglietto intero è:" + " " + newTicketPrice + "€");
}