"use strict";


const submitBtn = document.getElementById('submit'); //seleziona bottone genera

const priceKm = 0.21; //variabile prezzo al km

const under18 = 0.2; //variabile sconto under18

const over65 = 0.4; //variabile sconto over65

const ticketType = document.getElementById('ticket-type'); //seleziona dove stampare il tipo di sconto

const myTicketSection = document.getElementById('my-ticket'); //seleziona la sezione my-ticket

const resetBtn = document.getElementById('reset'); //seleziona bottone annulla

const finalPrice = document.getElementById('final-price'); //seleziona dove stampare il prezzo finale

const nomePassegggero = document.getElementById('nome-passeggero'); //seleziona dove stampare il nome del passeggero

let nameUser ; //variabile nome passeggero

let numKm ; //variabile numero km scelti

let age ; //variabile selettore fascia d eta

let ticketPrice; //variabile costo biglietto

submitBtn.addEventListener('click',

function() {

    nameUser = document.getElementById('name').value;

    numKm = Number(document.getElementById('km').value);

    age = Number(document.getElementById('eta').value);

    ticketPrice=(numKm * priceKm);
    
    if (age < 18){

        ticketPrice -= ticketPrice * under18

        ticketType.innerHTML = "Sconto Under18"

    } else if (age >= 65){

        ticketPrice -= ticketPrice * over65

        ticketType.innerHTML = "Sconto Over65"

    } else {

        ticketType.innerHTML = "Biglietto Standard"

    }
    
    console.log({numKm});

    console.log({age});

    nomePassegggero.innerHTML = nameUser

    finalPrice.innerHTML = Number(ticketPrice).toFixed(2);

    myTicketSection.classList.remove('d-none')
}
);

resetBtn.addEventListener('click',

function() {

    myTicketSection.classList.add('d-none')

}
);

