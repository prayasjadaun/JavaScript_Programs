// Question-5--- JavaScript Program to Add the digits of a number

function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

const numberToSum = 123;
const result = sumDigits(numberToSum);

console.log(`Sum of digits of ${numberToSum}: ${result}`);
