// Creare una funzione costruttore per il Docente (nome, cognome, matricola, materia), con i seguenti metodi:
//insegnaMateria() -> Sto insegnando materia
//presentati() -> Ciao, mi chiamo ....

//Nella pagina mostrare una lista dei docenti


//Da fare assieme
//Inserire due campi input per l'inserimento del nome cognome e materia, al fine di creare un nuovo docente. La matricola deve essere autoincrementale.

// DRY = Don't reapeat yourself

function Docente(nome, cognome, matricola, materia){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.materia = materia;

    this.insegnaMateria = function(){
        let insegnamento = "Sto insegnando..." + this.materia[0];
        return insegnamento;
    }

    this.presentati = function(){
        let presentazione = "Nome: " + this.nome + " " + this.cognome + " Materia: " + this.materia;
        return presentazione
    }
}


var docenti = [
    new Docente("Dario", "Mennillo", 1, ["IngSW", "FrontEnd"]),
    new Docente("Oscar", "Vecchione", 2, ["Db", "Backend"]),
    new Docente("Fabio", "Pileggi", 3, ["Java", "Backend"])
]

var listaDocenti = document.getElementById("listaDocenti");

docenti.forEach(docente =>{
    listaDocenti.innerHTML += "<li>"+docente.presentati()+"</li>";
})

//per inserire un nuovo docente. Prendo i valori dei campi input, creo una funzione nella quale faccio un new Docente( parametri sono i value recuperati dai campi input). Faccio push del nuovo Docente() nell'array, ristampo la lista docenti