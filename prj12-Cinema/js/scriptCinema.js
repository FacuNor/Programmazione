var filmsJSON = [
    {
        titolo: "Dune",
        regista: "Villeneuve",
        attori: [
            "Timothée Chalamet", 
            "Rebecca Ferguson", 
            "Zendaya"
        ],
        durata: 155,
        poster: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        trama: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
    },

    {
        titolo: "The Matrix",
        regista: "Wachowski",
        attori: [
            "Keanu Reeves", 
            "Laurence Fishburne", 
            "Carrie-Anne Moss"
        ],
        durata: 170,
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" ,
        trama: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
    },
    {
        titolo: "Blade Runner",
        regista: "Ridley Scott",
        attori:["Harrison Ford",
        "Rutger Hauer", 
        "Sean Young"
        ],
        durata: 117,
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        trama:"A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    },

    {
        titolo: "Drive",
        regista: "Nicolas Winding Refn",
        attori:["Ryan Gosling",
        "Carey Mulligan", 
        "Bryan Cranston"
        ],
        durata: 100,
        poster: "https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_SX300.jpg",
        trama:"A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver.",
    },

    {
        titolo: "Interstellar",
        regista: "Christofer Nolan",
        attori:["Matthew McConaughey",
        " Anne Hathaway", 
        "Jessica Chastain"
        ],
        durata: 169,
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        trama:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    }
]
var titolo = document.querySelector("#titolo");
var locandina = document.querySelector("#locandina");
var regista = document.querySelector("#regista");
var attori = document.querySelector("#attori");
var durata = document.querySelector("#durata");
var btnTrama = document.querySelector("#btnTrama");
var trama = document.querySelector("#trama");
var btnIndietro = document.querySelector("#btnIndietro");
var btnAvanti = document.querySelector("#btnAvanti");

var indice = 0;
btnAvanti.addEventListener("click",avanti);
btnIndietro.addEventListener("click",indietro);
btnTrama.addEventListener("click",visTrama);

function avanti(){
    indice++;
    if(indice == filmsJSON.length){
        indice = 0;
    }
    visualizza();
    flag = false;
    visTrama();
}

function indietro(){
    indice--;
    if(indice<0){
        indice = filmsJSON.length - 1;
    }
    visualizza();
    flag = false;
    visTrama();
}

function visualizza() {
    titolo.textContent = filmsJSON[indice].titolo;
    
    locandina.setAttribute("src",filmsJSON[indice].poster);

    regista.textContent = filmsJSON[indice].regista;

    //Attori
    while(attori.firstChild){
        attori.removeChild(attori.firstChild);
    }
    filmsJSON[indice].attori.forEach(attore =>{
        let riga = document.createElement("li");
        let wiki = document.createElement("a");
        wiki.setAttribute("href","https://it.wikipedia.org/wiki/"+attore);
        wiki.textContent = attore;

        attori.appendChild(riga);
        riga.appendChild(wiki);
    });

    durata.textContent = filmsJSON[indice].durata + " minuti";

}

var flag = true;
function visTrama(){
    if(flag) {
        trama.textContent = filmsJSON[indice].trama;
        flag = false;
    }else{
        trama.textContent = "";
        flag = true
    }
    
}
visualizza();

divLocandina = document.querySelector("#divLocandina");

var btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click",click);

var username = document.querySelector("#username");
var password = document.querySelector("#password");

var connesso = false

var user = {
    nome: "",
    password: "",
    film: []
}

function click(){
    if(!connesso){
        login();
    }else{
        logout();
    }
    console.log(user);
}

function login() {
    let nome = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    if(nome != "" && password!=""){
        user.nome = nome;
        user.password = password;
        let compra = document.createElement("button");
        compra.setAttribute("id","compra");
        compra.textContent="Compra";
        
        divLocandina.insertBefore(document.createElement("br"),regista);
        divLocandina.insertBefore(compra,regista);

        compra.addEventListener("click",compro);
        
        btnLogin.textContent="Logout"

        connesso = true;

    }
    
}

function logout(){
    connesso = false;
    btnLogin.textContent = "Login";
    divLocandina.removeChild(document.getElementById("compra"));
    user.nome = "";
    user.password = "";
    user.film = []; 
    azzeroLista();
}

function compro() {
    console.log("Sto comprando "+ filmsJSON[indice].titolo);
    user.film[user.film.length]=filmsJSON[indice].titolo;
    let userJSON=JSON.stringify(user);
    localStorage.setItem("user"+user.nome,userJSON);
    aggiornoLista();
    filmComprati++;
}


var filmComprati=0;
function aggiornoLista() {
    for(i=0;i<filmComprati;i++){
        let rimuovo = document.getElementById("listaFilms")
        divLocandina.removeChild(rimuovo);
    }

    user.film.forEach(film=>{
        let listaComprati = document.createElement("li");
        listaComprati.setAttribute("id","listaFilms");
        listaComprati.textContent=film;
        divLocandina.appendChild(listaComprati);
    })
}
function azzeroLista() {
    for(i=0;i<filmComprati;i++){
        let rimuovo = document.getElementById("listaFilms")
        divLocandina.removeChild(rimuovo);
    }
    filmComprati=0;
}