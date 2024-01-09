// Control Flow is used to Control the Execution of Code 
// It is also Called Logic Flow

// if 

if(true){
    // Code executes
}

if(false){
    // Code doesn't executes
}

// const isUserLoggedIn = false;

// if(isUserLoggedIn){
//     console.log(`User is Logged In`);
// } else {
//     console.log(`User is not Logged in`);
// } 

// Comparission  : <, >, <= , >=
// Equality : == , != , === , !==

// Double Equals to checks for the value while Triple equals to check for the value and datatype both.

// Example for ==  and ===

// == Double Equals 

if("2"==2){
    console.log("True");
} else {
    console.log("False");
}

// === Triple Equals or aka strict equals

if("2"===2){
    console.log("True");
} else {
    console.log("False");
}


// Another Example

const temperature = 41;

if(temperature < 50){
    console.log("Temperature is less than 50");
} else{
    console.log("Temperature is Greater than 50");
}


// Example

const score = 210;

if(score > 100){
    const power = "fly";
    console.log(`User Power : ${power}`);
} 

// Short hand Notation - When we have to write a single line of code after if condition and also we can write using comma but that is not recommended 

const balance = 1000;

// if(balance > 500) console.log("test") , console.log("test2");   {Not Recommended }

// else if

if(balance < 500){
    console.log("Less than 500")
} else if (balance < 750) {
    console.log("Less than 750")

} else if(balance < 900) {
    console.log("Less than 900")

} else {
    console.log("Less than 1200")

}


// &&  AND Operator - Returns True when all the conditions passed are true

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromMail = true;


if(userLoggedIn && debitCard){
    console.log("Allow user to Shop");
}


// || OR operator returns true if a single condition among all the passed condition is true

if(loggedInFromGoogle || loggedInFromMail){
    console.log("User Logged In");
}