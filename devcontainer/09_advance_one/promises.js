const promiseOne= new Promise(function(resolve,reject){
    //do an async task
    //db call,cryptography,network call


    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise is consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)

}).then(function(){
    console.log("Async 2 is resolved")
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})

    } ,1000)
})
PromiseThree.then(function(user){
    console.log("User is resolved",user)
})

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"karan",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

 PromiseFour.then(user =>{
    console.log("User is resolved",user)
    return user.username
}).then((username)=>{
    console.log("Username is",username)
}).catch(function(error){
    console.log("Error in promise",error)
}).finally(()=>{
    console.log("promise is either resolved or rejected")
})


const promiseFive = new Promise(function(resolve,reject){ 