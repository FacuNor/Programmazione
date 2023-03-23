// //Math.ceil() arrotonda all'intero maggiore
// var numeroCasuale =Math.ceil( Math.random() * 90 );

// //Math.floor() arrotonda all'intero minore
// var numeroCasuale = Math.floor((Math.random() * 90) + 1);

// console.log(numeroCasuale);

// var mioArr = ["Dario", "Paola", "Marco", "Anna"];

// console.log( mioArr.indexOf("Dario") ); // 0, perché Dario è all'indice 0

// console.log( mioArr.indexOf("Gloria") );// -1 

// console.log(mioArr.includes("Gennaro")); //false


var numeriEstratti = [];
var tentativi = 0;

var btn = document.getElementById("btn");

function estrai() {

    var numDaEstrarre = Number(document.getElementById("numDaEstrarre").value);

    if (numDaEstrarre <= 90) {

        for (var i = 0; i < numDaEstrarre; i++) {

            var numCasuale = Math.ceil(Math.random() * 90);

            if (!numeriEstratti.includes(numCasuale)) {
                numeriEstratti.push(numCasuale);
            } else {
                // estraiDiNuovo();
                i--;
            }

            tentativi++;
        }
        console.log("numeri estratti: ", numeriEstratti);
        console.log(tentativi);
    } else {
        console.log("non puoi estrarre più di 90 numeri ");
    }
}

btn.addEventListener("click", estrai, false);
//1°giro i = 0 -> 14
//2°giro i = 1 -> 6;
//3°giro i = 2 -> 14 adesso la i = 3 --> i = 2