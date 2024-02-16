//Question-10--JavaScript Program to Find the Largest Among Three Numbers (using if-else loop)


function findLargestAmongThree(num1, num2, num3) {
    let largest = num1;

    if (num2 > largest) {
        largest = num2;
    }

    if (num3 > largest) {
        largest = num3;
    }

    return largest;
}


const numA = 15;
const numB = 25;
const numC = 20;

console.log(`The largest number is: ${findLargestAmongThree(numA, numB, numC)}`);
