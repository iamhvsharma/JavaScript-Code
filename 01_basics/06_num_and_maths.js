const IndScore = 470;

// Declare DataType Explicitely 
const balance = new Number(100000);

console.log(balance);

// Methods of Number 
console.log(balance.toString()); // Converts Number to String
console.log(balance.toString().length); // Calculates length of Converted String
console.log(balance.toFixed(2)); // Ensures places after decimal point


const otherNumber = 23.55235;

console.log(otherNumber.toPrecision(3))

const hundred = 1000000000000;
console.log(hundred.toLocaleString());  // Puts comma according to USA Number system 
console.log(hundred.toLocaleString('en-IN'));  // Puts comma according to Indian Number system 


// +++++++++++++++++++ Maths +++++++++++++++++++

// Maths Library is a Inbuild Library of JS

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.345)); // By Default Round off value is Floor 
console.log(Math.floor(6.90986)); // To take round of Floor value
console.log(Math.ceil(6.344445));  // To take Round of Ceil value

console.log(Math.random()); // Gives value between 0 and 1
console.log((Math.random()*10)+1); // We multiplied a random value with 100 to shift a decimal and get a greater value

console.log(Math.floor(Math.random()*10)+1); // 


const min = 10
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
