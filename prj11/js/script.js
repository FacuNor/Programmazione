

// // IMMAGINI
// var img1 = document.querySelector("#img1");
// var img2 = document.querySelector("#img2");
// var img3 = document.querySelector("#img3");
// var img4 = document.querySelector("#img4");

// img1.setAttribute("src", "https://pyxis.nymag.com/v1/imgs/5d2/3a6/60d7c8aa3cf100fd26e50ff697fc7fb779-28-midnight-run-robert-de-niro.2x.h473.w710.jpg");

// img1.setAttribute("class", "dimImg");

// img2.setAttribute("src", "https://pyxis.nymag.com/v1/imgs/5d2/3a6/60d7c8aa3cf100fd26e50ff697fc7fb779-28-midnight-run-robert-de-niro.2x.h473.w710.jpg");

// img2.setAttribute("class", "dimImg");


// img3.setAttribute("src", "https://pyxis.nymag.com/v1/imgs/5d2/3a6/60d7c8aa3cf100fd26e50ff697fc7fb779-28-midnight-run-robert-de-niro.2x.h473.w710.jpg");

// img3.setAttribute("class", "dimImg");

// img4.setAttribute("src", "https://pyxis.nymag.com/v1/imgs/5d2/3a6/60d7c8aa3cf100fd26e50ff697fc7fb779-28-midnight-run-robert-de-niro.2x.h473.w710.jpg");

// img4.setAttribute("class", "dimImg");

// //Link a Wiki, nomi degli attori

// var lis = document.querySelectorAll("li"); //Nodelist, simile ad Array, un array di oggetti HTML

// console.log(lis);

// var attore1 = "Robert De Niro";
// var a1 = document.createElement("a");
// a1.textContent = attore1;
// a1.setAttribute("href", "https://it.wikipedia.org/wiki/Robert_De_Niro");

// lis[0].appendChild(a1);


var lis = document.querySelectorAll("li");

var attori = ["Robert De Niro", "Meryl Streep", "Al Pacino", "Leonardo di Caprio"];

for(var i = 0; i < lis.length; i++){
    
    let a = document.createElement("a")
    a.textContent = attori[i];
    a.setAttribute("href", "https://it.wikipedia.org/wiki/"+attori[i]);

    lis[i].appendChild(a);
}

var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");
var img4 = document.querySelector("#img4");


img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Robert_De_Niro_Cannes_2016.jpg/220px-Robert_De_Niro_Cannes_2016.jpg");
img1.setAttribute("class", "dimImg");

img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/220px-Meryl_Streep_December_2018.jpg");
img2.setAttribute("class", "dimImg");

img3.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Al_Pacino_2016_%2830401544240%29.jpg/220px-Al_Pacino_2016_%2830401544240%29.jpg");
img3.setAttribute("class", "dimImg");

img4.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Leonardo_Dicaprio_Cannes_2019_2.jpg/220px-Leonardo_Dicaprio_Cannes_2019_2.jpg");
img4.setAttribute("class", "dimImg");