"use strict";

const submitBtn = document.getElementById('submit');

const priceKm = 0.21;

const under18 = 0.2;

const over65 = 0.4;

const ticketType = document.getElementById('ticket-type')

const myTicketSection = document.getElementById('my-ticket')

const resetBtn = document.getElementById('reset');

const finalPrice = document.getElementById('final-price');

const nomePassegggero = document.getElementById('nome-passeggero');

let nameUser ;

let numKm ;

let age ;

let ticketPrice;

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

