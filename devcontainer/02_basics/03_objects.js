//singleton object

//OBJECT LITERALS
// Object.create()
const jsuser={
    name:"karan",
    age :21,
    location: "jaipur",
    email : "karan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])

jsuser.greeting = function(){
    console.log("Hello, " + this.name)
};
jsuser.greeting()