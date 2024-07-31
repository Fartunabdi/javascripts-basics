// Part 1: Data Types
const stringVar = "Hello, World!";
const numberVar = 42;
const booleanVar = true;
const nullVar = null;
const undefinedVar = undefined;
const objectVar = { name: "John", age: 30 };
const symbolVar = Symbol('unique');

console.log("String:", stringVar);
console.log("Number:", numberVar);
console.log("Boolean:", booleanVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Object:", objectVar);
console.log("Symbol:", symbolVar);

// Part 2: Arrays
const numbers = [5, 12, 8, 130, 44];

// Map method
const doubled = numbers.map(num => num * 2);
console.log("Doubled Array:", doubled);

// Filter method
const greaterThanTen = numbers.filter(num => num > 10);
console.log("Numbers Greater Than 10:", greaterThanTen);

// Reduce method
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

// forEach method
numbers.forEach(num => console.log("Number:", num));

// Part 3: Functions
function greet(name) {
    console.log(`Hello, ${name}!`);
}

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

function findMax(arr) {
    return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}

// Example usage
greet('Alice');
console.log("Sum of Array [1, 2, 3, 4]:", sumArray([1, 2, 3, 4]));
console.log("Max of Array [1, 2, 3, 4]:", findMax([1, 2, 3, 4]));

