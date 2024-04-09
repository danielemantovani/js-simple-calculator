// alert ("calc")

const numbers = document.querySelectorAll (".tasto");
// console.log (numbers);
const command = document.querySelectorAll (".command");
// console.log (command);
const display = document.querySelector (".schermo");
// console.log (display);
const equal = document.querySelector (".tasto-uguale");
// console.log(equal);
const canc = document.querySelector (".command-c");


//MILESOTNE 1:concatenare i numeri digitati sulla testiera sullo schermo della calcolatrice

for (let i = 0; i < numbers.length; i++){
    let numbersBtn = numbers [i];
    // console.log (numbersBnt);
    numbersBtn.addEventListener ("click", function (){  
        display.innerHTML += this.innerHTML;
        display.innerHTML = parseInt(display.innerHTML);
    })
}

// MILESTONE 2:aggiungere event listener a tutti gli operatori
// quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto

let num1 = "";
let operator = "";

for (let i = 0; i < command.length; i++){
    let commandBtn = command [i];
    commandBtn.addEventListener ("click", function (){
        console.log(commandBtn);
        num1 = parseInt(display.innerHTML);
        operator = this.innerHTML;
        console.log(num1, operator);
        display.innerHTML = "0";
    })
}

//MILESTONE 3: aggiungere event listener al pulsante =
// quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto

let num2 = "";

equal.addEventListener("click", function() {
    num2 = parseInt(display.innerHTML);
    console.log(num2);
    const total = caluclator (num1, num2, operator);
    display.innerHTML = total;
});

//MILESTONE 4: pulsante canc: cliccando il pulsante si resetta il calcolo



