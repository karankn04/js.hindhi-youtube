const user={
    username:"karan",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username:${this.username}`)
        console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);





function User(username,loginCount,signedIn){
    this.username= username;
    this.loginCount= loginCount;
    this.signedIn= signedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this;
}

const userOne =  new User("hitesh",12,true)
const userTwo = new User("chai or code",11,false)
// console.log(userOne);
// console.log(userTwo);


 