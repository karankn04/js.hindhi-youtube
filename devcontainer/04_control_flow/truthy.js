const userEmail = ""

if (userEmail) {
    // console.log("Email is provided");
}else{
    // console.log("Email is not provided");
}

// false values

// false,0, -0 , bigint 0n, "", null, undefined, NaN

// truthy values
// true, 1, -1, 0n, " ", "0", [], {}, function(){}, Symbol(), Infinity, -Infinity

// if (userEmail.length === 0){
//     console.log("array is empty");
// }

const empObj = {}

if (Object.keys(empObj).length === 0) {
    console.log("object is empty");
}


// nullishing coalishing operator (?? ): null defined

// let value ;
// val1 =  5 ?? 10

// console.log(val1); // 5

// terniary operator 

// condition ? true : false 