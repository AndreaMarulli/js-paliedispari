// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma (provate a implementare questa funzione con il ciclo for)

const utente = "ciao";

const palindroma = worldPalindorma(utente);
console.log(palindroma);


function worldPalindorma (parola) { 
  let reverseWord = "";
  for (let i = parola.length - 1; i >= 0; i--) {
    const Letter = parola.charAt(i);
    reverseWord += Letter;
  }

  console.log(reverseWord === parola);
  
}

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 6.
// Generiamo un numero random (sempre da 1 a 6) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

