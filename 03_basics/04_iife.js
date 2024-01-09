// Immediately Invoked Function Expression (IIFE)

// Named IIFE
(function db() {
    console.log("DB Connected");
}) ();

// db();


// To Immediately Invoked a Function we Wrap the function in parenthesis and then put another parenthesis outside that to call it this is called IIFE

// IIFE Syntax  : (Function)() 
// 2nd Parenthesis is for Execution call

// Interview Question -- What is IIFE ?

// Ans : A function which Exectutes immediately and to prevent from the problem of Global scope pollution.To remove the Global scope Declaration or variable we use IIFE

// IIFE Using Arrow Function 

(()=>{
    console.log(`DB Connected Perfectly`);
}) ();

// NOTE Must use a semicolon after the Execution call parenthesis to end that block of code.


// Parameter Passed in IIFE
((name)=>{
    console.log(`DB Connected Perfectly by ${name}`);
}) ('Harshvardhan');
