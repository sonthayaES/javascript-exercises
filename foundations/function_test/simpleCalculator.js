function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculate(operation, num1, num2){
    let output;
    switch (operation){
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return "Invalid input";
    }
}

let operation = prompt("What operation you want to do? 'add', 'subtract', 'multiply', 'divide'");
let userFirstInput = Number(prompt("Please enter first num: "));
let userSecondInput = Number(prompt("Please enter second num: "));

let result = calculate(operation, userFirstInput, userSecondInput);
console.log(result);

