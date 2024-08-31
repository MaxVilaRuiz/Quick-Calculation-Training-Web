// Function to return a random number
function randomNum(max) {
    return Math.floor(Math.random() * max);
}



// Function to choose the operator
let operatorsList = ['+', '-', '*', '/'];
let operatorSymbol;

function symbol() {
    operatorSymbol = operatorsList[Math.floor(Math.random() * 4)];
}



// Function to make the operation
let operation;
let solution;
let operatorNum1 = randomNum(10000);
let operatorNum2;

function operationMaker() {
    if (operatorSymbol === '+' || operatorSymbol === '-') {
        operatorNum2 = randomNum(10000);
        operation = `${operatorNum1} ${operatorSymbol} ${operatorNum2}`;

        if (operatorSymbol === '+') {
            solution = operatorNum1 + operatorNum2;
        }
        else if (operatorSymbol === '-') {
            solution = operatorNum1 - operatorNum2;
        }
    }
    else if (operatorSymbol === '*' || operatorSymbol === '/') {
        operatorNum2 = randomNum(100);
        operation = `${operatorNum1} ${operatorSymbol} ${operatorNum2}`;

        if (operatorSymbol === '*') {
            solution = operatorNum1 * operatorNum2;
        }
        else if (operatorSymbol === '/') {
            solution = Math.trunc(operatorNum1 / operatorNum2);
        }
    }

    let operation_span = document.getElementById('operation');
    operation_span.textContent = operation;
}



symbol();
operationMaker();



// Submit function
function correct() {
    let userSolution = document.getElementById('input');

    if (parseInt(userSolution.value) === solution) {
        location.reload(); // The page is reloaded to generate a new operation. 
    }
    else {
        alert('The answer is no correct, try again.');
    }
}