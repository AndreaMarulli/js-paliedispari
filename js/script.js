// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma (provate a implementare questa funzione con il ciclo for)
const utente = prompt('inserisci una parola')
console.log(utente);

const word = "Anna";
for (let i = 0; i < word.length; i++) {
    let truFalse;
    if (word % 2 === 0) {
        truFalse = "true";
    } else {
        truFalse = "false";
    }
    console.log(i, truFalse);
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 6.
// Generiamo un numero random (sempre da 1 a 6) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.