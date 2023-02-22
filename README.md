Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

Milestone 1

step 1- creare variebile priceKm per indicare il costo al kilometro

step 2 - creare variabile under18 utile al calcolo di sconto under18

step 3 - creare variabile over65 utile al calcolo di sconto over65

step 4 - creare variabile numKM richiedendo in forma di numero tramite input i kilometri da percorrere

step 5 - creare variabile age richiedendo in forma di numero tramite input quanti anni ha la persona che usera il biglietto

step 6 - creare variabile ticketPrice il cui valore sia il calcolo del costo del biglietto tramite il calcolo di variabile (numKM * 0,21)

step 7 - produrre un output dello sconto nel seguente modo:

            SE age < 18 

                    ticketPrice = ticketPrice - (ticketprice * under18)

            ALTRIMENTI SE age >= 65
                
                    ticketPrice = ticketPrice - (ticketprice * over65)

step 8 - stampare variabile ticketPrice.toFixed(2); per avere solo 2 decimali