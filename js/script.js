let firstNumber = "";
let operator;
let secondNumber = "";

console.log(firstNumber);


//DOM elements
let display = document.querySelectorAll('h1')[0];
let numbers = document.getElementById('number-buttons');
let operators = document.getElementById('operators');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let plusMinus = document.getElementById('plus-minus');
let porcentage = document.getElementById('porcentage');




//OPERATORS

//OTHER BUTTONS


//NUMBERS


//Event Listeners
numbers.addEventListener('click', function(e){
    if (e.target.tagName == "BUTTON"){
        let pressedButton = e.target.innerHTML;
        console.log(pressedButton);

    if(operator == undefined){
        firstNumber += pressedButton;
        display.innerHTML = firstNumber;
        console.log("FIRST NUMBER: " + firstNumber);
    } else {
        secondNumber += pressedButton;
        display.innerHTML = secondNumber;
        console.log("SECOND NUMBER: " + secondNumber);
    }}
});

//clear
clear.addEventListener('click', function(){
    firstNumber = "";
    secondNumber = "";
    operator = undefined;
    display.innerHTML = 0;
});

//Set operator
operators.addEventListener('click', function(e){
    if (e.target.tagName == "BUTTON"){
        operator = e.target.innerHTML;
        console.log(operator);    
}})

//Perform the operation
equal.addEventListener('click', function(){

    let operationResult = 0;

    if(firstNumber != "" && secondNumber == ""){
        operationResult = firstNumber;
        firstNumber = operationResult;
    } else if (firstNumber != "" && secondNumber != ""){
        n1 = Number.parseFloat(firstNumber);
        n2 = Number.parseFloat(secondNumber);
        
        switch(operator){
            case "+":
                operationResult = add(n1, n2);
                break;
            case "-": 
                operationResult = substract(n1, n2);
                break;
            case "x": 
                operationResult = multiply(n1, n2);
                break;
            case "÷":
                operationResult = divide(n1, n2);
                break;
        }
        
    display.innerHTML = operationResult;
    firstNumber = operationResult;
    secondNumber = "";
}});

//plus minus
plusMinus.addEventListener('click', function(e){
    if (e.target.tagName == "BUTTON"){
        if(secondNumber == ""){
            firstNumber *= -1;
            display.innerHTML = firstNumber;
        } else {
            secondNumber *= -1;
            display.innerHTML = secondNumber;
        }
        
    }
})



//SET DISPLAY EMPTY FOR START
if(firstNumber.length == 0){
    display.innerHTML = 0;
}


//CALCULATOR FUNCTIONS
function add(a, b){    
    return a + b;
}

function substract(a, b){    
    return a - b;
}

function multiply(a, b){    
    return a * b;
}

function divide(a, b){
    result = a / b;

    return result.toFixed(7);
}