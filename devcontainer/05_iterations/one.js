//for 

for (let i = 0; i < 10 ; i++) {
    const element = i;
    if(element == 5){
        // console.log("found 5");
        
    }
    // console.log(element);
}


for (let i = 0; i <= 10 ; i++) {
    // console.log(`outer loop value:${i}`);
    for ( let j = 0; j<=10 ;j++){
        // console.log(`inner loop value:${j}`);
        // console.log(i+' * ' + j + '=' (i * j));
        
        
    }

}

let myArray=["karan","schin","lucky"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

//  break and continue

// for (let index = 0; index <= 20 ; index++) {
//     if(index ==5){
//         console.log(`detected 5 `);
//         break
        
//     }
//    console.log(`value of i is ${index}`);
       
// }

//  break and continue

for (let index = 0; index <= 20 ; index++) {
    if(index ==5){
        console.log(`detected 5 `);
        continue
        
    }
   console.log(`value of i is ${index}`);
       
}

