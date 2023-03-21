// Commento riga in js
/**
 *  
 * 
 */

// JS è un linguaggio debolmente tipizzato, Java è fortemente tipizzato
//JS conosce perfettamente i tipi

var a = "Ciao"; //dichiarando e assegnando contemporaneamente

var numero;
numero = 12;

var presenza = true;

var numStudenti = 13;

var saluto = "Ciao";
var carattere = 'c';
var nomeUtente = "Dario";

//faccio una concatenazione
var salutoUtente = saluto + " " + nomeUtente;
console.log(salutoUtente);

//faccio un test per vedere se JS conosce i tipi
console.log(typeof salutoUtente);
console.log(typeof numStudenti);
console.log(typeof presenza);

//esempio con 2 numeri
var num1 = 34;
var num2 = 8;
var somma = num1 + num2;
var prodotto = num1 * num2;
var differenza = num1 - num2;
var quoziente = num1/num2;

console.log("La somma vale: " + num1 + num2);
console.log("La somma vale: " + somma);

//Scrivo nella pagina
//1. Recupero i miei elementi Html attraverso l'id
var primoNumero = document.getElementById("primoNumero");
var secondoNumero = document.getElementById("secondoNumero");
var sommaNumeri = document.getElementById("sommaNumeri");
var prodottoNumeri = document.getElementById("prodottoNumeri");
var differenzaNumeri = document.getElementById("differenzaNumeri");
var quozienteNumeri = document.getElementById("quozienteNumeri");

//2. vado a "iniettare" il contenuto nei miei elementi html
primoNumero.innerHTML = "Il primo numero vale: " + num1;
secondoNumero.innerHTML = "Il secondo numero vale: " + num2;
sommaNumeri.innerHTML = "La somma vale: " + somma;
prodottoNumeri.innerHTML = "Il prodotto vale: " + prodotto;
quozienteNumeri.innerHTML = "Il quoziente vale: " + quoziente;
differenzaNumeri.innerHTML = "La differenza vale: " + differenza;

console.log(primoNumero);

//cast dei dati, salto di tipo

var annoCorrente = "2023";
var annoNascita =  "1989";

var eta = annoCorrente - annoNascita; // 34
//cast del dato
var sommaAnni = Number(annoCorrente) + Number(annoNascita); //20231989

console.log(eta);
console.log(sommaAnni);

//cambio di tipo
//dichiaro una variabile
var nome = "Dario";
//riassegno la variabile
nome = "Anna";
nome = "Andrea";
nome = 56;
nome = true;
nome = ["Dario","Anna", "Andrea"];
nome = {
    nome: "Dario",
    cognome: "Mennillo",
    presenza: true
}

console.log(nome);



