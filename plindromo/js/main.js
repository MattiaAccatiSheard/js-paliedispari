// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
let parola = prompt("scrivi qualcosa:");
console.log(parola);

function palindromo(x) {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

console.log(palindromo(parola))
