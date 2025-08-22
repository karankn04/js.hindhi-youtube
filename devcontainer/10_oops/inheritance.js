class user{
    constructor(username){
        this.username= username;

    }
    logme(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor (username,email,password){
        super(username)
        this.email = email;
        this.password =password;

    }

    addcourse(){
        console.log(` a new course was added by ${this.username}`);

    }
}
const chai =  new Teacher("chai","chai@teacher",123);
chai.addcourse()
chai.logme()
const masalachai = new user("masalaChai")
masalachai.logme()

console.log(chai instanceof user);