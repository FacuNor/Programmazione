//Ciclo For
//3 statement
// var i = 0; Inizializzazione
//i < numero; Condizione, determina il numero di cicli 
// i++ ; Aggiornamento. i++ (operatore di post incremento)

// for(var i = 0; i < 10; i++){
//     console.log("Ciao " + i);
// }

var frutta = ["mela", "pesca", "ciliegia", "fragola"];

for(var i = 0; i < frutta.length; i++){
    console.log(frutta[i]);
}

//foreach
var index = 0;
frutta.forEach(function(frutto) {
    console.log(index);
    console.log(frutto);
    index++;
})

//Forof
for (const frutto of frutta) {
  console.log(frutto);
}

//operatori di incremento ++
// i++ post incremento, la variabile viene prima letta poi incrementata
// ++i pre incremento
// i-- post decremento
// --i pre decremento

var eta = 30;
console.log(eta++); 
console.log(eta);

var tuaEta = 20;
console.log(++tuaEta); //in questo caso la variabile viene subito incrementata
console.log(tuaEta);





