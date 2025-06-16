//dates

let myDate = new Date();
// console.log(myDate); // current date and time
// console.log(myDate.toString()); // string representation of date
// console.log(typeof myDate); 

let myCreatedDate = new Date(2023, 0, 1); // January 1, 2023
// console.log(myCreatedDate.toDateString()); // specific date


let myTimestamp = myCreatedDate.getTime(); // get timestamp in milliseconds
// console.log(myTimestamp); // timestamp of the date
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);