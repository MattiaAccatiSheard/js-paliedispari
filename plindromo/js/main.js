// Snack3
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
let N = parseInt(prompt("scrivi un numero:"));

for (let i = 0; i < N; i++) {
    let array = [];
    for (let y = 0; y < 10; y++) {
        array.push(Math.floor(Math.random()*100)+1);
        
    }
    console.log("array:" + array);
    
}