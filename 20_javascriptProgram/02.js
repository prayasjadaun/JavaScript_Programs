// Question-2---JavaScript Program to Find the Area of  Rectangle, Circle, Square and Triangle (use functions)

function findRectangleArea(length, width) {
    return length * width;
}

function findCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function findSquareArea(side) {
    return Math.pow(side, 2);
}

function findTriangleArea(base, height) {
    return 0.5 * base * height;
}

const rectangleArea = findRectangleArea(5, 8);
const circleArea = findCircleArea(4);
const squareArea = findSquareArea(6);
const triangleArea = findTriangleArea(7, 10);

console.log(`Rectangle Area: ${rectangleArea}`);
console.log(`Circle Area: ${circleArea}`);
console.log(`Square Area: ${squareArea}`);
console.log(`Triangle Area: ${triangleArea}`);
