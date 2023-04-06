var listaProdotti = document.getElementById("listaProdotti");

const URL = "https://dummyjson.com/products";
//stampa marca, titolo, descrizione, prezzo, immagine del singolo oggetto
//Metodi http : GET, POST, PATCH, PUT, DELETE
//Permettono di attuare il CRUD: CREATE(Post), READ(Get), UPDATE(Patch), DELETE(Delete)

//il metodo fetch di default opera una GET
fetch(URL)
.then(res =>{return res.json()}) 
.then(data =>{
    console.log(data);

    //prodotti: object[]
    let prodotti = data.products;

    prodotti.forEach(prodotto => {
        // listaProdotti.innerHTML += "<li>Nome: " + prodotto.brand + " " + prodotto.title + "</li> <img src = '" + prodotto.thumbnail + "'>"; 

        // Uso il backtick `` Win(alt + 96) - Mac(alt+\)
        //Utilizzando il backtick richiamo le variabili con il $

        listaProdotti.innerHTML += 
        `<li> Nome Prodotto: ${prodotto.brand} ${prodotto.title} </li>
        <img class='dimImg' src='${prodotto.thumbnail}'/>
        `
    });



});


console.log("Ciao");