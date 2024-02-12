//Question-7--JavaScript Program to Find Sum of n Numbers (numbers given as an array)




function findSum(numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}

// Example usage
const numbersToSum = [1, 2, 3, 4, 5];
const result = findSum(numbersToSum);

console.log(`Sum of numbers: ${result}`);

