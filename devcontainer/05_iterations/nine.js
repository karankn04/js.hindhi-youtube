const myNums = [1,2,3,4,5];

// const myTotal =myNums.reduce(function(acc, currentvalue){
//     console.log(`acc:${acc} and currentvalue:${currentvalue}`);
    
//     return acc + currentvalue;
// },5)

// const myTotal = myNums.reduce( (acc, curr) => acc + curr ,0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemNme :"js course",
        price :999
    },
    {
        itemNme :"js course",
        price :999
    },
    {
        itemNme :"py course",
        price :1999
    },
    {
        itemNme :"mobile course",
        price: 3999
    },
    {
        itemNme :"data science course",
        price :5999
    },
    
]

const totalprice = shoppingCart.reduce( (acc ,item) => acc + item.price ,0)
console.log(totalprice);