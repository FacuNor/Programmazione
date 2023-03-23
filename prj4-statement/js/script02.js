//operatori logici
// ! NOT serve a negare una condizione ( !=  is not Equal)
// && AND permette di valutare CONTEMPORANEAMENTE due o più condizioni 
// || OR permette di valute singolarmente due o più condizioni

//TABELLA DELLE VERITà

//videogame Hard Mode
//per vincere al gioco, superare un livello, dobbiamo avere un punteggio superiore a 50pt e delle skill superiore a 30pt. Per superare il livello devo rispettare entrambe le condizioni


var punteggio = 45;
var skill = 25;

if((punteggio >= 50) && (skill >= 30)){
    console.log("Bravo, hai superato il livello");
}else if( punteggio >= 50 && skill < 30){
    console.log("Mi dispiace, devi migliorare le tue skill");
}else if( punteggio < 50 && skill >= 30){
    console.log("Mi dispiace, devi migliorare i tuoi punteggi");
}else{
    console.log("Mi dispiace ma non hai superato il livello perché hai dei punteggi sotto soglia. Entrambi !");
}


//videogame Easy Mode
// Basta che uno solo dei due punteggi sia sopra la soglia per poter superare il livello
if(punteggio >= 50 || skill >= 30){
    console.log("Bravo, hai superato il livello");
}else{
    console.log("Mi dispiace ma con punteggio e skill sottosoglia non ti posso far passare. Te ne basta una sopra! ");
}



