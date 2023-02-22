'use strict'


const submitBtn = document.getElementById('submit')

const priceKm = 0.21;

const under18 = 0.2;

const over65 = 0.4;

let numKm ;

let age ;

let ticketPrice;

submitBtn.addEventListener('click',

function() {

    numKm = Number(document.getElementById('km').value);

    age = Number(document.getElementById('eta').value);

    ticketPrice=(numKm * priceKm);
    
    if (age < 18){

        ticketPrice -= ticketPrice * under18

    } else if (age >= 65){

        ticketPrice -= ticketPrice * over65

    };

    console.log({numKm});

    console.log({age});

    document.getElementById('test').innerHTML = Number(ticketPrice).toFixed(2);

}
);



