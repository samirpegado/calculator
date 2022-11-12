const displayBox = document.querySelector('#display');
const numberBtns = Array.from(document.querySelectorAll('.nmbrBtn'));
const operatorBtns = Array.from(document.querySelectorAll('.opBtn'));
const clearBtn = document.querySelector('#btnc');
const equalBtn = document.querySelector('#btneq');

numberBtns.forEach(button => button.addEventListener('click', addToDisplay));
operatorBtns.forEach(button => button.addEventListener('click', addToDisplay));
clearBtn.addEventListener('click', clearDisplay);
equalBtn.addEventListener("click", equals);

let = operand1 = '';
let = operand2 = '';
let operator = '';
let total = '';
let lastButtonPushed = '';
let temp = '';

function addToDisplay(e){
    let button = (e.target.innerText);
    
    if (operator == '' && button >=0 && button <= 9){
        displayBox.textContent += button;
    }else if (lastButtonPushed === operator){
        if (button >=0 && button <= 9){
            displayBox.textContent = button; 
        }else {
            false;
        }
    }else if(button >=0 && button <= 9){
        displayBox.textContent += button;
    }else if (button == '+' || button == '-' || button == '/' || button == '*'){
        if (operator == ''){
            operand1 = displayBox.textContent; console.log(operand1);
            operator = button; console.log(operator);
        }else if (operator !== ''){
            operand2 = displayBox.textContent; console.log(operand2);
            operate(operand1, operator, operand2); 
            operand1 = displayBox.textContent; console.log(operand1);
            operator = button; console.log(operator);
            temp = '';
            operand2 = temp;
        }  
    }
    lastButtonPushed = button;
}

function equals(){
    if (lastButtonPushed === operator){
        false;
    }else {
        operand2 = displayBox.textContent; console.log(operand2);
        operate(operand1, operator, operand2);
        operand1 = displayBox.textContent; console.log(operand1);
        operand2 = '';
        operator = '';
    }    
}


function clearDisplay(){
    displayBox.textContent = '';
}

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, op, num2) {
    total = 0;
    switch(op) {
        case '+':
            total += add(num1, num2);
            displayBox.textContent = total;
            break;
        case '-':
            total += subtract(num1, num2);
            displayBox.textContent = total;
            break;
        case '*':
            total += multiply(num1, num2);
            displayBox.textContent = total;
            break;
        case '/':
            if(num2 == '0') {
                displayBox.textContent =  `Error`;
                
           }else {
                total += divide(num1, num2);
                displayBox.textContent = total;
           }            
            break;
    }
    console.log(total);
}