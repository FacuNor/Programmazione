//Notazione con costruttore, utile quando ho più oggetti dello stesso tipo

function Studente(nome, cognome, mail, matricola, materie){
    this.nome = nome
    this.cognome = cognome;
    this.mail = mail;
    this.matricola = matricola;
    this.materie = materie;

    this.voto = 0;

    this.studia = function(){
        return this.nome + " sta studiando";
    }

    this.presentati = function(){
        let presentazione = "Ciao, mi chiamo " + this.nome + " " + this.cognome;
        return presentazione;
    }

    this.setVoto = function(voto){
        this.voto = voto;
        return voto;
    }
}

// Anche in JS per creare un nuovo oggetto di tipo studente utilizzo la parola chiave new
var mioStudente = new Studente("Pippo", "Rossi", "pippo.rossi@mail.it", 0, ["Angular", "Typescript"]);
console.log( mioStudente.presentati() );

//provo ad utilizzare la funzion costruttore mancante di alcuni parametri e funziona    
var mioStudente2 = new Studente("Paola", "Bianchi");
console.log( mioStudente2.presentati() );

var aula = [
    new Studente("Emanuela", "Capasso", "emanuela.capasso@mail.it", 1, ["Java", "JS", "IngSw"]),
    new Studente("Facundo", "Acosta", "facundo.acosta@mail.it", 2, ["Java", "JS", "IngSw", "Html"]),
    new Studente("Chiara", "Zaccone", "chiara.zaccone@mail.it", 3, ["Java", "JS", "IngSw", "Html", "Css"])
];

aula.forEach(studente => {
    console.log(studente.presentati());
});


var elencoStudenti = document.getElementById("elencoStudenti");

aula.forEach(studente =>{
    elencoStudenti.innerHTML += "<li>" + studente.nome + " " + studente.cognome + " Matr: " + studente.matricola + "</li>";
})


// for(var i = 0; i < aula.length; i++){
//     console.log(aula[i].presentati());
// }

// console.log(aula[0].nome);
// console.log(aula[0].cognome);
// console.log(aula[0].mail);


// // function Persona(n,c,i){
// //     this.nome = n;
// //     this.cognome = c;
// //     this.identita = i;
// // }