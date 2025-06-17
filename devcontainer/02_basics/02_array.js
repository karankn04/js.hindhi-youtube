const marvel_heroes =["thor", "iron", "hulk", "spiderman", "captain america"];
const dc_heroes=["batman", "superman", "flash", "green lantern", "aquaman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3][1]); // ["thor", "iron", "hulk", "spiderman", "captain america", Array(5)]

// const allhero=marvel_heroes.concat(dc_heroes);
// console.log(allhero); // ["thor", "iron", "hulk",
const allhero2=[...marvel_heroes, ...dc_heroes];

// console.log(allhero2); // ["thor", "iron", "hulk", "spiderman", "captain america", "batman", "superman


console.log(Array.isArray("karan")); // false
console.log(Array.from("karan"));
 // [ 'k', 'a', 'r', 'a', 'n' ]

 
