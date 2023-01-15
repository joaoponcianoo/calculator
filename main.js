var userSelection = document.getElementsByTagName('button');

var newScreen = document.getElementById("new-screen");
var oldScreen = document.getElementById("old-screen")

var oldNumber;
var operator;

// show in screen
function insertScreen(addNumber) {
    let number = document.getElementById("new-screen").innerHTML;
    document.getElementById("new-screen").innerHTML = number + addNumber;
    return;
}
// clear screen
function clear() {
    document.getElementById("new-screen").innerHTML = "";
    document.getElementById("old-screen").innerHTML = "";
    return;
}
// remove numbers 
function removeNumber() {
    let screen = document.getElementById("new-screen").innerHTML
    document.getElementById("new-screen").innerHTML = screen.substring(0, screen.length -1)
}

function calculate(operator, newNumber) {
    switch (operator) {        
        case "+":
            newScreen.innerHTML = Number(oldNumber) + Number(newNumber); 
            break;        
        case "-":
            newScreen.innerHTML = Number(oldNumber) - Number(newNumber);        
            break;        
        case "/":
            newScreen.innerHTML = Number(oldNumber) / Number(newNumber);  
            break; 
        case "x":
            newScreen.innerHTML = Number(oldNumber) * Number(newNumber);     
            break;
        default:
            break;
    }

    oldScreen.innerHTML = oldScreen.innerHTML + " " + newNumber;
    operator = "";
    oldNumber = "";
}

for (var i = 0; i < userSelection.length; i++) {
    (function (button) {
        userSelection[button].addEventListener("click", function () {

            switch (userSelection[button].className) {
                case "number":
                    insertScreen(userSelection[button].innerHTML);
                    break;

                case "operators":
                    if (newScreen.innerHTML != "" && operator != "") {
                        operator = userSelection[button].innerHTML;
                        oldNumber = document.getElementById("new-screen").innerHTML;
                        document.getElementById("old-screen").innerHTML = oldNumber + " " + operator;
    
                        document.getElementById("new-screen").innerHTML = "";
                    } 
                    break;

                case "calculate":
                    let newNumber = document.getElementById("new-screen").innerHTML;
                    calculate(operator, newNumber);
                    break;

                case "clear":
                    clear();
                    break;

                case "remove":
                    removeNumber();
                    break;

                default:
                    break;
            }
        })
    })(i);
}