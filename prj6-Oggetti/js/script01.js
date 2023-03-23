//Per descrivere un'entità complessa utilizzo gli oggetti
//In JS non ho l'obbligo di specificare una classe. Posso creare subito degli oggetti 

//Notazione letterale basato sul principio chiave: valore
var persona = {
    //proprietà
    nome: "Pippo",
    cognome: "Rossi",
    eta: 30,
    coloreOcchi: "Marroni",

    //metodi
    studia: function(){
        console.log(this.nome + " sta studiando...");
    },

    presentati: function(){
        console.log("Ciao, mi chiamo " + this.nome + " " + this.cognome);
    }
}

//per accedere a metodi e proprietà si utilzza la notazione .

console.log(persona.nome + " " + persona.cognome);
persona.studia();
persona.presentati();

var docenteJS = {
    nome: "Dario",
    cognome: "Mennillo",
    matricola: 123,
    materie: ["Js", "IngSw", "Angular", "Java"],
    presenza: true,

    presenta: function(){
        let listaMaterie = "";

        this.materie.forEach( materia =>{
            listaMaterie += "<li> " + materia + "</li>";
        })

        let presentazione = "Nome: " + this.nome + " " + this.cognome + " matricola: " + this.matricola + " <br> materie: " + listaMaterie 

        return presentazione;
    }
}

var demo = document.getElementById("demo");
demo.innerHTML = docenteJS.presenta();

//Questa notazione permette di passare facilmente al formato JSON




