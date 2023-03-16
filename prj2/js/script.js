//Definisco gli array 
//Gli Array sono contenitori di elementi simili tra loro e sono 0-based
//cioè ogni elemento ha un indice numerico e questo indice parte da 0
//gli array si definiscono con le parentesi []
var frutta = [
    "mela",
    "pera",
    "banana",
    "fragola"
];

//prendo gli elementi singolarmente usando questa dicitura nomeArray[indice]
console.log( frutta[0] );
console.log( frutta[1] );
console.log( frutta[2] );
console.log( frutta[3] );

//voglio conoscere la lunghezza dell'array con la proprietà length
var lungArray = frutta.length;
console.log("Nell'array di frutta ci sono: " + lungArray + " elementi");

//aggiungo un elemento al fondo dell'array
frutta.push("arancia");

//ordino l'array alfabeticamente
frutta.sort();

//inverto l'ordine
frutta.reverse();

//elimino l'ultimo elemento
frutta.pop();

console.log(frutta);

var demo = document.getElementById("demo"); //<div></div>

//+= mi permette di INCREMENTARE una variabile

// demo.innerHTML = "<p>" + frutta[0] + "</p>";
// demo.innerHTML += "<p>" + frutta[1] + "</p>";
// demo.innerHTML += "<p>" + frutta[2] + "</p>";
// demo.innerHTML += "<p>" + frutta[3] + "</p>";

//Se ho tanta frutta non utilizzerò mai la stampa singola ma utilizzo un ciclo for
//1. i cicli for si applicano su tutto ciò che è Iterable, cioè aventi indice
//2. in JS esistono 4 tipi di cicli for
//let i = 0 -> inizializzazione
//i < frutta.length -> condizione
//i++ -> aggiornamento. ++ è operatore di postincremento

for(let i = 0; i < frutta.length; i++){
    demo.innerHTML += "<li>" + frutta[i] + "</li>";
}



//ATT: posso array misti ma servono a niente
var mioArr = ["Dario", "Mela", 2, false, "Banana", 5];
console.log(mioArr);

var persona = ["Elisabetta", "Penna", 20, true];
console.log(persona);
