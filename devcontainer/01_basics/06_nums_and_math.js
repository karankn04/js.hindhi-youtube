const score = 400

const balance = new Number(1000.50)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const othernum = 123.456
// console.log(othernum.toPrecision(4));

const hundread =100000
// console.log(hundread.toLocaleString('en-IN'));



// +++++++ Math +++++++

// console.log(Math);
// console.log(Math.abs(-42)); // absolute value
// console.log(Math.round(4.7)); // round to nearest integer
// console.log(Math.ceil(4.1)); // round up
// console.log(Math.floor(4.9)); // round down
// console.log(Math.max(1, 2, 3, 4, 5)); // maximum value
// console.log(Math.min(1, 2, 3, 4, 5)); // minimum value
console.log((Math.random()*10)+1); // random number between 0 and 1

const min = 10
const max = 20  

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between min and max