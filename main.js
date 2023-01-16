const userSelection = document.getElementsByTagName('button');

const upScreen = document.getElementById("up-screen");
const downScreen = document.getElementById("down-screen");

let firstNumber; // operadores
let operator;

// show in screen
function insertScreen(addNumber) {
    let numeberScreen = document.getElementById("up-screen").innerHTML;
    document.getElementById("up-screen").innerHTML = numeberScreen + addNumber; // concatenate
    return;
}
// clear screen
function clear() {
    document.getElementById("up-screen").innerHTML = "";
    document.getElementById("down-screen").innerHTML = "";
    operator = undefined;
    return;
}
// remove numbers 
function removeNumber() {
    let numeberScreen = document.getElementById("up-screen").innerHTML;
    document.getElementById("up-screen").innerHTML = numeberScreen.substring(0, numeberScreen.length -1);
}

function calculate(operator, secondNumber) {
    let calculed = true;
    switch (operator) {        
        case "+":
            upScreen.innerHTML = Number(firstNumber) + Number(secondNumber); 
            break;        
        case "-":
            upScreen.innerHTML = Number(firstNumber) - Number(secondNumber);        
            break;        
        case "/":
            upScreen.innerHTML = Number(firstNumber) / Number(secondNumber);  
            break; 
        case "x":
            upScreen.innerHTML = Number(firstNumber) * Number(secondNumber);     
            break;
        default:
            calculed = false; 
            break;
    }
    if(calculed) {
        downScreen.innerHTML = downScreen.innerHTML + " " + secondNumber;
    }
}

for (let i = 0; i < userSelection.length; i++) {
    (function (button) {
        userSelection[button].addEventListener("click", function () {

            switch (userSelection[button].className) {
                case "number":
                    insertScreen(userSelection[button].innerHTML);
                    break;

                case "operators":
                    if (upScreen.innerHTML != "" && operator === undefined) {
                        operator = userSelection[button].innerHTML;

                        firstNumber = document.getElementById("up-screen").innerHTML;
    
                        document.getElementById("down-screen").innerHTML = firstNumber + " " + operator;
                        document.getElementById("up-screen").innerHTML = "";
                    }
                    break;

                case "calculate":
                    calculate(operator, upScreen.innerHTML);
                    operator = undefined;
                    break;

                case "clear":
                    clear();
                    break;

                case "remove":
                    removeNumber();
                    break;

                default:
                    break;
            };
        });
    })(i);
};