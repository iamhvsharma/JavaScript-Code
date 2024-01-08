// Functions in JavaScript



function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    
}

sayMyName();

// fUNCTION Without Return 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


// Function with Return
function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
    return number1 + number2;
}


const result = addTwoNumbers(5,12);
console.log("Result :", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage("Harsh"));
console.log(loginUserMessage());


// Rest Operator (...)

function calculateCartPrice (...num1 ) {
    return num1
}

console.log(calculateCartPrice(200, 500, 1000, 2000));


const user = {
    username: "Harsh",
    price : 1999,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
    

}

handleObject(user);