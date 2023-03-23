//varie tipologie di operatori di confronto
// == è uguale a 
// === è strattamente uguale a (controlla anche il tipo)
// != diverso
// !== strattamente diverso
// >
// <
// >= 
// <=

//tutte le volte che utilizzo un operatore di confronto sto manipolando un booleano

var num1 = 3;
var num2 = 4;

console.log( num1 == num2 ); //false
console.log( num1 === num2 ); //false
console.log(num1 < num2);

var num3 = 5;
var num4 = 5;

console.log(num3 == num4); //true
console.log(num3 === num4); //true

var num5 = 8;
var num6 = "8";

console.log( num5 == num6); //true
console.log( num5 === num6); //false

var parola1 = "ciao";
var parola2 = "Ciao";

console.log("Le due parole sono :" + ( parola1 == parola2));


//controllo due numeri, confronto due numeri 
var primoNumero = 23;
var secondoNumero = 23;

//if(condizione){corpo del costrutto}

if( primoNumero > secondoNumero ){
    console.log(primoNumero + " è il più grande");
}else if( primoNumero < secondoNumero){
    console.log(secondoNumero + " è il più grande");
}else{
    console.log("I numeri sono uguali ");
}