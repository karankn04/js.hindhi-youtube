function one(){
    const username = "Karan Singh";

    function two(){
        const website ="youtube"
        console.log(username);

    }
    // console.log(website);
    
    two()

}
// one()

if(true){
    const username = "Karan Singh";
    if(username=== "Karan Singh"){
        const website = "youtube";
        // console.log(username + website);
        }
    // console.log(username); // This will throw an error because 'website' is not defined in this scope
}
// console.log(username);

//++++++++ interesting part ++++++++

console.log(addone(5))
function addone(num){
    return num + 1;

}
 // This will return 6

addTwo(5)
const addTwo = function(num){
    return num + 2;

}
 // This will return 7