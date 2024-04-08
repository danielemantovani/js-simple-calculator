// alert ("calc")

const numbers = document.querySelectorAll (".tasto");
console.log (numbers);
const command = document.querySelectorAll (".command");
console.log (command);
const display = document.querySelector (".schermo");
console.log (display);

let num1 = "";

for (let i = 0; i < numbers.length; i++){
    let numbersBnt = numbers [i];
    console.log (numbersBnt);
    numbersBnt.addEventListener ("click", function (){  
        num1 = numbersBnt.innerHTML;
        console.log (this.innerHTML);
        display.innerHTML += numbersBnt.innerHTML;

    })
}