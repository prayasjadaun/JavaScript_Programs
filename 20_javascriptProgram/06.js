// Question-6--JavaScript Program Check even or odd number

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

const numberToCheck = 7;
const result = checkEvenOrOdd(numberToCheck);

console.log(`${numberToCheck} is ${result}`);
