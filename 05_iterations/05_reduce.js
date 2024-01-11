// Reduce 

const myNums = [ 1, 2, 3, 4];

// const myTotal = myNums.reduce(function (acc, currrval){
//     console.log(`acc : ${acc} and currval : ${currrval}`);
//     return acc + currrval
// }, 0)

// console.log(myTotal);

// Another Syntax
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);