var btn = document.getElementById("btn");
var listaVoti = document.getElementById("listaVoti");
var numPromBocc = document.getElementById("numPromBocc");

var studenti = ["Anna Rossi", "Pippo Bianchi", "Laura Verdi", "Gianni Arancione"];
var voti = [30, 17, 25, 26];

function stampaVoti(){
    let promossi = 0;
    let bocciati = 0;
    
    for(var i = 0; i < studenti.length; i++){

        let valutazione = "";

        if(voti[i] >= 18){
            valutazione = "Promosso";
            promossi++;
        }else{
            valutazione = "Esame non superato"
            bocciati++;
        }

        listaVoti.innerHTML += "<li> " + studenti[i] + " voto: " + voti[i] + " Valutazione: " + valutazione + "</li>";
    }

    numPromBocc.innerHTML = "Promossi: " + promossi + "<br> Bocciati: " + bocciati;
}

btn.onclick = stampaVoti;