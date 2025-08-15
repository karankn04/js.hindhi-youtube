const name = "Karan"
const reoocount = 50

console.log(`hello my name is ${name} and my repo count is ${reoocount}`);

const gamename = new String('motherfucker');
// console.log(gamename.split(""));

let altCase ="";
for(let i = 0; i < gamename.length; i++){
    if(i % 2 === 0){
        altCase += gamename[i].toLowerCase();
    } else {
        altCase += gamename[i].toUpperCase();
    }
}
console.log(altCase.split(""));


