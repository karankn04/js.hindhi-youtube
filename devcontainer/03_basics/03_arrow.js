const user ={
    username:"karan",
    price: 1000,

    wellcomeMessage:function(){
        console.log(`Welcome ${this.usernamer} to the world of JavaScript`);
        // console.log(this);
        
    }

}
 
// user.wellcomeMessage(); // This will print "Welcome karan to the world of JavaScript"
// user.username= "sam",
// user.wellcomeMessage(); // This will print "Welcome sam to the world of JavaScript"
// console.log(this)


// function chai(){
//     console.log(this);
    
// }
// chai();


// const chai = () => {
//     let username = "karan";
//     console.log(this.username);
    
// }

// chai(); // This will print undefined because 'this' refers to the global object in arrow functions


// 

const addtwo = (num1,num2)=> num1 + num2


console.log(addtwo(5,6)); // This will return 11