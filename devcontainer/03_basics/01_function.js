
// // function saymyname(){
// //     console.log("k")
// //     console.log("a")
// //     console.log("r")
// //     console.log("a")
// //     console.log("n")
// // }
// // // saymyname();

// // function addTwoNumber(number1,number2){}

// //     // let result= number1+number2;
// //     // return result;
// //     return number1 + number2; //returning the result directly


// // const result = addTwoNumber(2,3);
// // // console.log("Result:",result);

// function loginusermessage(username="sam"){
//     if(username){
//         console.log("Please provide a username");
//         return
//     }  
//     return `${username} is logged in successfully`
// }
// console.log(loginusermessage("Karan Singh"));



function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(100,232,400));

const user={
    username:"karan",
    price :300
}
function handleobject(anyobject){
    console.log(`username  is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobject(user);

handleobject({
    username:"Karan Singh",
    price: 500
})

const myNEWarray=[100,200,300,400,500];

function returnSecondvalue(getArray){
    return getArray[1]; //returning the second value of the array
}

console.log(returnSecondvalue(myNEWarray));
