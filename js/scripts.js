//Riscitto il codice ottimizzando la sequenza delle domande, ora non chiede i km se prima non è corretto il dato sull'età
//Analogamente non va al calcolo del prezzo e quindi dello sconto se il secondo dato ( i km )non è corretto.


let anni = prompt("Quanti anni hai ? ");
let sconto = 0;
let prezzo = 0;
const costo = 0.21;
const mesKO = "Non hai scritto sotto forma di numero, dato non corretto, premi CTR+R e compila correttamente";
console.log("hai scritto", anni, "dato tipo", typeof (anni));

anni = parseInt(anni);

console.log("dopo la conversione", anni, "è di tipo", typeof (anni));


if (isNaN(anni)) {
    alert(mesKO);

} else {
    let km = prompt("Quanti km devi percorrere ? ");

    km = parseInt(km);

    if (isNaN(km)) {
        alert(mesKO);
    } else {
        prezzo = km * costo;
        console.log("il prezzo è", prezzo);
        prezzo = prezzo.toFixed(2);
        alert("il prezzo è " + prezzo);

        if (anni < 18) {

            sconto = prezzo * 0.2;
            sconto = sconto.toFixed(2);
            alert(`Poichè hai ${anni} hai diritto ad uno sconto del 20% e quindi il costo è ${sconto}`)


        } else if (anni > 65) {
            sconto = prezzo * 0.4;
            sconto = sconto.toFixed(2);
            alert(`Poichè hai ${anni} hai diritto ad uno sconto del 40% e quindi il costo è ${sconto}`)
        }



    }


}


