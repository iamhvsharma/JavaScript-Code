/*
NOTES:
Prefer not to use var because of issue in block scope and functional scope.
Let is block scoped and var is used for Global declaration
If variable is Declared and not assigned any value then it will print UNDEFINED.

*/



const accountId = 14567;
let accountEmail = "harshvardhan0806@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; // Not allowed because this variable is declared as a const type 

// To Print Multiple variables in a Single table we can use below syntax.

console.table([accountId, accountEmail, accountPassword, accountCity]);


accountEmail = "kmatur@gmail.com";
accountPassword = "080904";
accountCity= "Ajmer";

