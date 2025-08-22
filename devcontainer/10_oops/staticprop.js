class user{
    constructor(username,email){
        this.username = username;
        this.email = email;
       
    }
    logme(){
        console.log(`username:${this.username}`);
    }
    createId(){
        return`123`
    }
}
const karan = new user("karan","bab@123")
console.log(karan.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}
const iphone = new Teacher("iphone","i@Phone.com")
console.log(iphone.createId());
console.log(iphone.logme());
