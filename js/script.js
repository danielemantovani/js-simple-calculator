// alert ("calc")

const numbers = document.querySelectorAll (".tasto");
// console.log (numbers);
const command = document.querySelectorAll (".command");
console.log (command);
const display = document.querySelector (".schermo");
// console.log (display);

// let firstNum = 0;
// let operator = "";
// let secondNum = 0;
// let result = 0;


//MILESOTNE 1:concatenare i numeri digitati sulla testiera sullo schermo della calcolatrice

for (let i = 0; i < numbers.length; i++){
    let numbersBnt = numbers [i];
    // console.log (numbersBnt);
    numbersBnt.addEventListener ("click", function (){  
        numbersBnt.innerHTML;
        display.innerHTML += numbersBnt.innerHTML;
    })
}

// MILESTONE 2:aggiungere event listener a tutti gli operatori
// quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto

for (let i = 0; i < command.length; i++){
    let commandBtn = command [i];
    commandBtn.addEventListener ("click", function (){
        commandBtn.innerHTML;
        console.log(commandBtn);
    })
}