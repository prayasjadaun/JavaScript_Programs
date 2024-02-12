// Question-3------JavaScript Program to Swap Two Variables (with and without using third variable)


// With a Third Variable:

let a = 5;
let b = 10;
let temp;

temp = a;
a = b;
b = temp;

console.log(`After swapping: a = ${a}, b = ${b}`);

// Without a Third Variable:

let x = 15;
let y = 20;

x = x + y;
y = x - y;
x = x - y;

console.log(`After swapping: x = ${x}, y = ${y}`);
