//Question-11--JavaScript Program for a Simple Calculator

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const num1 = 10;
const num2 = 5;

console.log(`Sum: ${add(num1, num2)}`);
console.log(`Difference: ${subtract(num1, num2)}`);
console.log(`Product: ${multiply(num1, num2)}`);
console.log(`Quotient: ${divide(num1, num2)}`);
