"use strict"; // i.e Treat all the JS Code as newer version of code with latest rules and Regulations.

// alert("Ki haal chaal?"); // As we are using node.js not browser so can't use this

/* 
Datatypes in JS
1. Number => 2 to power 53
2. bigint=> To store very large number
3. string => "stringName"
4. boolean => true/false
5. null => stand alone value, intensional empty value
6. undefined => Not assigned any value to a variable    
7. symbol => 

Symbol : Every Symbol() call is guaranteed to return a unique Symbol. Every Symbol.for("key") call will always return the same Symbol for a given value of "key". When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.

*/

let age = 19;
let string = "Harsh";
let isHarsh = true;
let harshCareer; 


// To check datatype of a variable we use[typeof] keyword
console.log(typeof age);
console.log(typeof string);
console.log(typeof isHarsh);
console.log(typeof harshCareer);
console.log(typeof null); // Typeof NULL is shown as object


/*
*/
