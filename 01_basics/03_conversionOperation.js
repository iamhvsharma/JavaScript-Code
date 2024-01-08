let Jersey = "7"; // Mahi bhai Jersey number

console.log(typeof Jersey);

let JerseyInNumber = Number(Jersey);

console.log(typeof(Jersey));


// If a Variable has number + string then after typecasting and prinitng that variable
// The Output will be NAN-> Not a number 


/*
"7" => 7
"7abc" => NaN
true => 1
false => 0
*/


let isLoggedIn =1;
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn);


/*
1=> true ; 0 => false
"" => false
"harsh"=> true 
*/

// *********************Operations*******************

let value = 3;
let negValue = -value;
// console.log(negValue);

// Arithamatic operations 

console.log(5+10);
console.log(5-10);
console.log(5*10);
console.log(5**10);
console.log(5/10);
console.log(5%10);

let str1 ="Harsh";
let str2 = "vardhan"

let str3 = str1 + str2;
console.log(str3); // Concatenation of Strings

console.log("1"+ 2);
console.log(1 + "2");
console.log("1"+ 2 + 2);
console.log(1 + 2 + "2");

// Note in this type of Conversion if a string is written first then whole statement will be treated as String and if a number is written first then it will do the required operation first then after that string will be added


console.log(+true); // => Gives output as 1
console.log("") // Gives output as false 
console.log(+""); // Gives output as 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2; // Not a good practise

let gameCounter = 100;
gameCounter++; // Increment Operator increases value by 1
console.log(gameCounter);

// Read Documentation of [Prefix and Postfix on MDN]
// Link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment  

console.log("********************************************************************************************")

// Example of Prefix and PostFix to understand the concept :

let i = 0;

// Prefix ++i;
// Postfix i++

// console.log(++i == i++);
// Output : True

// Prefix 
// let a = ++i;
// console.log('a:', a);
// console.log('i:', i);

// Output a:1     i:1

// PostFix
let b = i++;
console.log('b:', b);
console.log('i:', i);

// Output b: 0    i: 1









