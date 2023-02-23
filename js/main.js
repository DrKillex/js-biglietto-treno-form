"use strict";


const submitBtn = document.getElementById('submit'); //seleziona bottone genera

const priceKm = 0.21; //variabile prezzo al km

const under18 = 0.2; //variabile sconto under18

const over65 = 0.4; //variabile sconto over65

const ticketType = document.getElementById('ticket-type'); //seleziona dove stampare il tipo di sconto

const myTicketSection = document.getElementById('my-ticket'); //seleziona la sezione my-ticket

const resetBtn = document.getElementById('reset'); //seleziona bottone annulla

const finalPrice = document.getElementById('final-price'); //seleziona dove stampare il prezzo finale

const nomePasseggero = document.getElementById('nome-passeggero'); //seleziona dove stampare il nome del passeggero

const nameUser = document.getElementById('name');

const numKm = document.getElementById('km');

const age = document.getElementById('eta');

submitBtn.addEventListener('click',

function() {

    const inputNameUser = nameUser.value;

    const inputNumKm = numKm.value;

    const inputAge = age.value;

    let ticketPrice=(inputNumKm * priceKm);
    
    if (inputAge < 18){

        ticketPrice -= ticketPrice * under18;

        ticketType.innerHTML = "Sconto Under18";

    } else if (inputAge >= 65){

        ticketPrice -= ticketPrice * over65;

        ticketType.innerHTML = "Sconto Over65";

    } else {

        ticketType.innerHTML = "Biglietto Standard";

    };

    nomePasseggero.innerHTML = inputNameUser;

    finalPrice.innerHTML = ticketPrice.toFixed(2);

    if (inputNumKm > 0 && inputAge !== '' && inputNameUser !==''){

        myTicketSection.classList.remove('d-none');
        
    } else {

        alert('devi riempire tutti i campi');

    }

}
);

resetBtn.addEventListener('click',

function() {

    myTicketSection.classList.add('d-none')

}
);

