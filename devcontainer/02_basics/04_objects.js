// const tinderuser= new object()
const tinderuser = {}

tinderuser.id = "12345";
tinderuser.name = "Karan";
tinderuser.isloggedIn = false;
// console.log(tinderuser);

const regularuser ={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
        firstname: "Karan",
        lastname: "Singh"
     }
    }
}

// console.log(regularuser.fullname?.userfullname.firstname);

// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}

// const obj3={...obj1,...obj2} //spread operator
// // console.log(obj3);

// const user ={
//     {
//         id:1
//         email: "
//     }
// }


const course = {
    coursename:"js in hindi",
    price: 299,
    courseInstructor: "Karan Singh",
}
const {courseInstructor: instructor}= course; //destructuring

console.log(instructor);

{
    "name" : "Karan",
    "cousename" : "js in hindi",
    "price" : "free"
}


[

    {},
    {},
    {},
]