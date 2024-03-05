let firstNumber = "";
let operator;
let secondNumber = "";
let errorCalculator = false;
let completedOperation = false;

//DOM elements
let display = document.querySelectorAll('h1')[0];
let numbers = document.getElementById('number-buttons');
let operators = document.getElementById('operators');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let plusMinus = document.getElementById('plus-minus');
let porcentage = document.getElementById('porcentage');
let error = document.getElementById('error');

//Event Listeners
//NUMBERS
numbers.addEventListener('click', function(e){
    addNumber(e);    
});

clear.addEventListener('click', function(e){
    if (e.target.tagName == "BUTTON"){
        clearDisplay(e);
    }
});

equal.addEventListener('click', function(){
    console.log("EQUAL FUNCTION: n1: " + firstNumber + " . n2: " + secondNumber);
    equalFunction();
});

//Set operator
operators.addEventListener('click', function(e){
    setOperator(e);
    console.log(operator);
})

porcentage.addEventListener('click', function(e){
    if (e.target.tagName == "BUTTON"){
        if(secondNumber == ""){
            firstNumber /= 100;
            display.innerHTML = firstNumber;  
        }          
}})



function equalFunction(){
    let operationResult = 0;
    
    if(firstNumber != "" && secondNumber == ""){
        operationResult = firstNumber;
        firstNumber = operationResult;
        completedOperation = false;

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
        operator = undefined;
        completedOperation = true;
        console.log(
            "- FIRST NUMBER: " + firstNumber +
            "- SECOND NUMBER: " + secondNumber + 
            "- OPERATION: " + operator 
        );
    }
};

function clearDisplay(e) {
    firstNumber = "";
    secondNumber = "";
    operator = undefined;
    display.innerHTML = "0";
}

function addNumber(e){
    if (e.target.tagName == "BUTTON"){
        error.style.visibility = 'hidden';
        let pressedButton = e.target.innerHTML;
        console.log(pressedButton);
        if (completedOperation){
            // firstNumber = "";
            secondNumber += pressedButton;
            display.innerHTML = firstNumber;
            // operator = undefined;
            completedOperation = false;
        } else if(operator == undefined || errorCalculator){
            firstNumber += pressedButton;
            display.innerHTML = firstNumber;
            console.log("FIRST NUMBER: " + firstNumber);
        } else if (operator != undefined){
            secondNumber += pressedButton;
            display.innerHTML = secondNumber;
            console.log("SECOND NUMBER: " + secondNumber);
        } else {
            secondNumber = "";
            firstNumber += pressedButton;
            display.innerHTML = firstNumber;
        }}
        errorCalculator = false;
}

function setOperator(e){
    if (e.target.tagName == "BUTTON"){
        if(operator != undefined){
            equalFunction();
            operator = e.target.innerHTML;
            // secondNumber = "";
        } else if (e.target.id != 'equal'){
            operator = e.target.innerHTML;
        }
}}

//PLUS MINUS BUTTON
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


//OPERATORS FUNCTIONS
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
    if(n2 != 0){
        let result = a / b;
        if(result == Math.floor(result)){
            return Math.floor(result);
        } else {
            return result.toFixed(5);
        }
    } else {
        error.style.visibility = 'visible';
        errorCalculator = true;
        return "";
    }
}