//le funzioni servono a racchiudere in un unico punto più istruzioni

// //dichiaro una funzione 
// function saluta(){
//     //1.acquisire il nome utente e stampare un saluto in console
//     var nomeUtente = prompt("Come ti chiami ?");
//     console.log("Ciao " + nomeUtente);
// }

// //per poter eseguire una funzione la dovrò richiamare
// //In questo caso la sto richiamando dall'interno dello script 
//  saluta();


//recupero div benvenuto
//OSS: questo sotto sono variabili globali, scope ampio
var benvenuto = document.getElementById("benvenuto");
var btn = document.getElementById("btn");
var elenco = document.getElementById("elenco");

function saluta(){
   
    //OSS: nome utente è una variabile locale, scope limitato alla funzione
    let nomeUtente = document.getElementById("nomeUtente").value;

    if(nomeUtente == ""){
        benvenuto.innerHTML = "Mi dispiace ma non hai scritto niente !"
    }else{
        benvenuto.innerHTML = "Ciao " + nomeUtente + " benvenuto sulla pagina";
        stampaFilm();
    }

}

function stampaFilm(){
    let films = "Dune, Avatar, Stranger Things";
    elenco.innerHTML = "Film del momento : " + films;
}




//onclick è l'evento collegato al pulsante btn
//la funzione saluta è collegata senza parentesi tonde
btn.onclick = saluta;







