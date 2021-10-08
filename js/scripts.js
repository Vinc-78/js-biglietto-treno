const costoKm = 0.21;
let prezzo;
let sconto;

let eta = prompt("Quanti anni hai ?");
let kmDaPercorrere = prompt("Quanti Km devi percorrere ?");

const mesKO = "nel formato corretto ossia numeri, ricarica la pag.(CTR + R)"

eta = parseInt(eta);
kmDaPercorrere = parseInt(kmDaPercorrere);



if (isNaN(eta)) {
    alert(`Non hai inserito gli anni ${mesKO}`);
    
} else if (isNaN(kmDaPercorrere)) {
    alert(`Non hai scritto i Km ${mesKO}`);

} else {
    prezzo=(kmDaPercorrere*costoKm);
    prezzo=(Math.round(prezzo * 100) / 100); //Arrotonda alla seconda cifra arrotondando all'intero più vicino

    if (eta<18){
            
            alert (`Il prezzo del biglietto è ${prezzo} euro`);
            sconto=(prezzo)-(prezzo*0.20);  //applica lo sconto
            sconto=(Math.round(sconto * 100) / 100); //Arrotonda alla seconda cifra arrotondando all'intero più vicino
            alert (`Poichè hai ${eta} anni, hai uno sconto del 20% e paghi ${sconto} euro`);
    }
    else if (eta>65) {
            
            alert(`Il prezzo del biglietto è ${prezzo} euro`);
            sconto=(prezzo)-(prezzo*0.40);
            sconto=(Math.round(sconto * 100) / 100);  
            alert(`Poichè hai ${eta} anni, hai uno sconto del 40% e paghi ${sconto} euro`);
    }
    else{
            
            alert (`Il prezzo del biglietto è ${prezzo} euro`);

    }
}