//if

const isuserloggedin = true;
const temperature = 30;


if(temperature===40){
    console.log("less than 50");

}else{
    // console.log("greater than 50");
}
// console.log("temperature is greter than 50");
const score = 200;
let power; // Declare in outer scope
if(score > 100){
    const power = "fly";
    // console.log(`user power:${power} `);

}
// console.log(`user power:${power} `);

const balance = 2000;
// if(balance > 500)console.log("you can buy this product");
// immediately invoke function expression & implicit scope

// if(balance < 500){
//     console.log("less than 500");
// }else if (balance <750) {
//     console.log("less than 750");
// }   else if (balance < 1000) {
//     console.log("less than 1000");
    
// }else{
//     console.log(`balace:${balance}`)
    
// }


const userloggedin = true;
const debitCard= true;
const loggedInFromGoogle = false
const loggedInFromEmail = true;


if(userloggedin && debitCard && 2==3) {
    console.log("allow to buy");
}

if(userloggedin || debitCard || loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}
