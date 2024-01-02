// Datatypes are of Two types based on Memory Storage and the way the data is accessed   

// NOTE - JavaScript is a Dynamically Typed language

// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.



// 1. Primitive 

// 7 Types : String, Number, Boolean, NULL, undefined, Symbol,BigInt

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// Need to clear concept of Symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId); // Output : False
// console.log(id);
// console.log(anotherId);


const bigNumber = 1234567890098765432123456789098765432n;


// 2. Reference Type Datatype or Non Primitive

// Arrays, Objects, Functions 

// Array
const heros = ["Shaktiman", "Naagraj", "Chaddiman", "Bakkarsur"];


// Object 
let myObj = {
    name: "Harsh",
    age:19,
}


// Function
const myFunction = function () {
    console.log("Hello Duniya");
}

console.log(typeof(heros)); // Returns Object   
console.log(typeof(myObj));// Returns Object
console.log(typeof(myFunction)); // Returns Function but in theory we say Function object

// NOTE : ALL the Non Primitive Datatypes return Object in their Typeof check


