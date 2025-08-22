let myName ="karan     "

// console.log(myName.truelength());

let myHeroes=["batman", "superman", "spiderman", "ironman"]

let heroPower ={
    batman: "rich",
    superman: "fly",
    spiderman: "swing",
    ironman: "suit",

    getSpidermanPower: function(){
        // console.log(`spiderman can ${this.spiderman}`);
    }
        
}
Object.prototype.hitesh=function(){
    // console.log(`hitesh is present in all objects`);
}
// heroPower.hitesh()




//inheritance

const teacher ={
    makevideo: true
}
const user={
    name:"chai",
    email:"chai@google.com",
}

teacher.__proto__=user

//modern way of inheritance

Object.setPrototypeOf(teacher, user)

let anotherusername = "chai or code   "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);

}
anotherusername.truelength()
