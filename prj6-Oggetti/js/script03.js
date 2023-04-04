// var animale = {
//     tipo: "terrestre",
//     nome: "gatto",
//     classe: "mammifero",
//     zampe: 4
// }

//L'oggetto JSON è praticamente una stringa
var animaleJSON = '{"nome": "gatto", "tipo": "terreste", "classe": "mammifero", "zampe": 4}';
console.log(animaleJSON);
console.log(typeof animaleJSON);

var animale = JSON.parse(animaleJSON);
console.log(animale);
console.log(animale.nome);
console.log(animale.tipo);
console.log(animale.classe);

function Gatto(nome, tipo, classe, zampe){
    this.nome = nome;
    this.tipo = tipo;
    this.classe = classe;
    this.zampe = zampe;
}

var gatto = new Gatto(animale.nome, animale.tipo, animale.classe, animale.zampe);

console.log(gatto.classe);

//Trasfomo un oggetto JS in un JSON
var studente = {
    nome: "Laura",
    cognome: "Gialli",
    matr: "A002",
    eta: 25
}

console.log(studente);

var studenteJSON = JSON.stringify(studente);

console.log(studenteJSON);




var filmJSON = '{"Title":"Dune","Year":"2021","Rated":"PG-13","Released":"22 Oct 2021","Runtime":"155 min","Genre":"Action, Adventure, Drama","Director":"Denis Villeneuve","Writer":"Jon Spaihts, Denis Villeneuve, Eric Roth","Actors":"Timothée Chalamet, Rebecca Ferguson, Zendaya","Plot":"A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir becomes troubled by visions of a dark future.","Language":"English, Mandarin","Country":"United States, Canada","Awards":"Won 6 Oscars. 170 wins & 281 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"83%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.0","imdbVotes":"658,103","imdbID":"tt1160419","Type":"movie","DVD":"22 Oct 2021","BoxOffice":"$108,327,830","Production":"N/A","Website":"N/A","Response":"True"}';

var mioFilm = JSON.parse(filmJSON);

console.log(mioFilm.Title, mioFilm.Actors);

var titolo = document.getElementById("titolo");
var regista = document.getElementById("regista");
var locandina = document.getElementById("locandina");
var durata = document.getElementById("durata");
var attori = document.getElementById("attori");

function mostraFilm(){
    titolo.innerHTML = mioFilm.Title;
    regista.innerHTML = "Regista: " + mioFilm.Director;
    locandina.src = mioFilm.Poster;
    durata.innerHTML = "Durata: " + mioFilm.Runtime;
    attori.innerHTML = "Attori" + mioFilm.Actors;
}

mostraFilm();