var listaUtenti = document.getElementById("listaUtenti");

const URLEndPoint = "https://reqres.in/api/users";

var mioObj = {};

//La fetch di default compie una GET
//il metodo fetch mi permette di mettere in atto una programmazione ASINCRONA
fetch(URLEndPoint)
.then(data => {return data.json()})
.then(response => {
    //response è un Array
    console.log(response);
    console.log(response.data);

    let utenti = response.data;

    utenti.forEach(utente => {
        listaUtenti.innerHTML += "<li>" + utente.first_name + " " + utente.last_name + "<img src=" + utente.avatar + "> </li>";
    });

    //AJAX, sono in asincrona
    // mioObj = response;
    // console.log(mioObj);
})
.catch(error =>{console.log(error)});

//questa console viene eseguita PRIMA della fetch
console.log(mioObj);