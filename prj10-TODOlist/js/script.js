var listaCoseDaFare = document.querySelector("#listaCoseDaFare"); //ul

var btn = document.querySelector("#btn");

function aggiungi(){
    //1 prende  ciò che l'utente scrive nel campo input
    //2 crea un elemento li 
    //3 mostra l'elemento nella lista ul
    var todo = document.querySelector("#todo").value;

    var li = document.createElement("li");
    li.textContent = todo; //<li>todo...</li>

    //genitore.appendChild(figlio)
    listaCoseDaFare.appendChild(li);

    li.onclick = function(){
        this.classList.add("barrato");
    }

    var btn = document.createElement("button");
    btn.textContent = " X ";

    btn.onclick = function(){
        listaCoseDaFare.removeChild(li);
    }

    li.appendChild(btn);


    //Completamento al click sulla singola voce
    //Eliminazione del singolo li
}

btn.onclick = aggiungi;


