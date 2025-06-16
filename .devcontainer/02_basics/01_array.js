//array

const myarr = [1, 2, 3, 4, 5];
const myherror = ["batman", "superman", "spiderman"];

const myarr2 = new Array(1, 2, 3, 4, 5);
// console.log(myarr[1]);

// array methods

// myarr.push(6); // add to end
// console.log(myarr); // [1, 2, 3, 4, 5, 6]

// myarr.unshift(9); // add to start
myarr.shift(); // remove from start
console.log(myarr); // [0, 1, 2, 3, 4, 5]