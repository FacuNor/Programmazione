//base e altezza sono i parametri di ingresso che compongono la firma della funzione

function calcolaArea(base, altezza){
    let area = base * altezza;
    //con return, restituisco "all'esterno" la variabile area
    return area;
}

var baseRett = 3;
var altezzaRett = 4;

var areaRett = calcolaArea(baseRett, altezzaRett);
console.log("L'area del rettangolo vale: " + areaRett);

//posso passare direttamente i parametri
var areaRett2 = calcolaArea(5, 78);
console.log("L'area del rettangolo2 vale: " + areaRett2);

//posso anche evitare di utilizzare la variabile
console.log("L'area del rettangolo3 vale: " + calcolaArea(5,7.765).toFixed(3));

console.log("L'area del rettangolo4 vale: " +  calcolaArea());

// function calcolaVolume(base, altezza, profondita){
//     let area = calcolaArea(base, altezza);
//     let volume = area * profondita;
//     return volume;
// }
// console.log("Il volume del solido vale: " + calcolaVolume(4,5,6));

function calcolaVolume(area, profondita){
    let volume = area * profondita;
    return volume;
}

console.log("Il volume del solido vale: " + calcolaVolume(calcolaArea(4,5), 6));

