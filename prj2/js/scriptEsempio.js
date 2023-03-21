// voglio creare un elenco di film con relativa durata e mostrarli nella pagina nel div #elenco
//stampa il totale dei minuti nel div #sommaMinuti
//stampa un saluto all'utente nel p #benvenuto

//ACQUISIZIONE NOME UTENTE
var username = prompt("Ciao utente, digita il tuo username");
var benvenuto = document.getElementById("benvenuto");
benvenuto.innerHTML = "Ciao " + username + " ecco i film in sala: ";


//MOSTRA ELENCO FILM CON RELATIVA DURATA
var film = ["Venom", "Dune", "John Wick", "Fight Club", "Interstellar"];
var durata = [100, 140, 90, 120, 160];

var elenco = document.getElementById("elenco");
var sommaMinuti = document.getElementById("sommaMinuti");

var minutiTotali = 0;

for(let i = 0; i < film.length; i++){
    elenco.innerHTML += "<li> " + film[i] + " - " + durata[i] + " min </li>";  
    minutiTotali+= durata[i];
}

sommaMinuti.innerHTML = "Minuti totali: " + minutiTotali;

