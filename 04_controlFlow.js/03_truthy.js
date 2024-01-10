// Truthy Value and Falsy value

// Falsy Values => false, zero [0], -0, BigInt 0n, "", null, undefined, NaN

// Excluding falsy value others are Truthy value

// Exceptional Truthy value => "0", 'false', " " {Space in string}, [], {}, function(){}

// Note : false == 0 -> Returns True 
// false == '' -> Returns True 
// 0 == '' -> Returns True 



// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 10;

console.log(val1);


// Ternary operator 

// Syntax : condition ? true : false

// Example 

const iceTeaPrice = 100;

iceTeaPrice <=80 ? console.log("True") : console.log("False");