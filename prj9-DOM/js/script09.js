//Metodi per lavorare con il DOM

// var elUno = document.getElementById("uno");

//QUERY SELECTOR, utilizzano una sintassi CSS per recuperare elementi del DOM
//con il Query Selector recupero sempre e solo uno e un solo elemento
var elUno = document.querySelector("#uno");

console.log(elUno);
console.log(typeof elUno); //object. Ogni elemento html è un object

//Quando utilizzo una sintassi css come le classi, il query selector prende solo la prima occorrenza
var el = document.querySelector(".red");
console.log(el);

var elDue = document.querySelector("#due");
console.log(elDue);

//QuerySelectorAll, mi permette di recuperare contemporanemente più elementi
var tuttiLI = document.querySelectorAll(".red");

//cambio la classe a tutti 
tuttiLI.forEach(li => {
    //className mi permette di modificare la classe
    li.className = "blue"

    //classList mi permette di modificare la lista di classi presente
    li.classList.add("bold");

})
console.log(tuttiLI);


var btn = document.querySelector("#btn");
// //1° strategia
// btn.onclick = function(){
//     //nel query selector posso anche passare direttamente il nome tag
//     var lis = document.querySelectorAll("li");
    
//     lis.forEach(li => {
//         li.textContent = ""
//     })
// }

// 2° strategia
btn.onclick = function(){
    var ul = document.querySelector("ul");
    ul.textContent = "";
}

///CREARE da 0 un nuovo elemento
function creaNuovoLi(){

    // recupero il parent
    var ul = document.querySelector("ul");

    //creo il figlio, creo un nuovo li
    var nuovoLi = document.createElement("li"); //<li></li> è un object
    
    //creo il testo nel mio li
    nuovoLi.textContent = "Gamberi"; //nuovoLi = <li>Gamberi</li>

    //Aggancio il figlio al genitore
    ul.appendChild(nuovoLi);

    //Avendo tra le mani un oggetto posso trattarlo come tale, cioè così come tratto un btn o un qualsiasi altro elemento della pagina.

    nuovoLi.classList.add('red');

    //Posso applicare delle funzionalità al mio oggetto. Per esempio al click diventa bold
    nuovoLi.onclick = function(){
        //il this fa riferimento a nuovoLi
        //il toggle è l'interruttore delle classi, toglie e mette una classe
        this.classList.toggle("bold");
    }

}

creaNuovoLi();


/////////////////////////////////
///Get & Set Attribute
var imgPC = document.querySelector("#imgPC");

//setAttribute("nomeAttributo", "valore")
imgPC.setAttribute("src", "https://www.multimediashopping.it/pimages/Dell-Pc-Portatile-Notebook-Pronto-All-Uso-Display-14-FullHD-Inte-extra-big-547203-028.jpg");

imgPC.setAttribute("class", "dimImg");

