// Read MDN Documentation of Dates

// Javascript Date object represents a single moment in time in a platform indepenedent format. Date objects encapsulates an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970 UTC

let myDate = new Date(); // Made a date Object and it's instance

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

// Use more methods by puting . after myDate object



// Checking typeof date 
console.log(typeof(myDate));

// Creating a specific date

let myCreateDate = new Date(2023, 0, 23, 5, 3);  // Parameter passing (Year, Month, Date. hour, min, sec) => In JS month starts from 0 -> Jan

// To create a date on YY MM DD Format  ("2023-01-14")

console.log(myCreateDate.toDateString());

let specificDate = new Date("01-14-2024");

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(specificDate.getTime());


// Masti with Dates and Methods  :>

if(specificDate.getTime() < myTimeStamp){
    console.log(specificDate.getTime());
} else {
    console.log(myTimeStamp);
}


console.log(Math.floor(Date.now()/1000)); // Converts Mili second into seconds

// This Date.now()/1000 Sometimes gives value in Decimal points so here we use Math.floor or Math.ceil to Round of the output. Usually Math.floor is used.

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getDate());


console.log (newDate.toLocaleDateString('default', {
    // Press ctrl space to view Properties
    weekday: "narrow",

}))
