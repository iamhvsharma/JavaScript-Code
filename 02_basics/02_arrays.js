const marvel_Hero = ["Thor", "Captaon America", "SpiderMan", "Ironman"]

const dc_heros = ["superman", "flash", "Batman"];

marvel_Hero.push(dc_heros);

console.log(marvel_Hero);


// Concatenate 

const allHero = marvel_Hero.concat(dc_heros);
console.log(allHero);

// Popularly Spread Operator is used to  merge Two Arrays

const allNewHero = [...marvel_Hero, ...dc_heros];
console.log(allNewHero); 


// How to convert multiple arrays in a single array into a single array
const newArr = [1, 2, 3, [4, 5,  6], 7, [6,7, 4, 5]];

const realArr = newArr.flat(Infinity);
// console.log(newArr);
console.log(realArr);


// Method to check a Array is Array or not!

console.log(Array.isArray(newArr));
console.log(Array.isArray(realArr));
console.log(Array.isArray("Harshvardhan"));


// Method to convert a String, Numbers etc in array

const makeArr = (Array.from("Harshvardhan Sharma"))
console.log(Array.isArray(makeArr));


// Array of method - Used to make a array from taking different values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));