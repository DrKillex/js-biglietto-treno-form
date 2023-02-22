"use strict";

const submitBtn = document.getElementById('submit');

const priceKm = 0.21;

const under18 = 0.2;

const over65 = 0.4;

const ticketType = document.getElementById('ticket-type')

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

    document.getElementById('nome-passeggero').innerHTML = nameUser

    document.getElementById('final-price').innerHTML = Number(ticketPrice).toFixed(2);

}
);



