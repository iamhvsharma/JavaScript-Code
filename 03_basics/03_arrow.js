// Arrow Function 

// this function is used to refer current context 

const user = {
    username: "Harsh",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();

// user.username = "Kartikey";

// user.welcomeMessage();

console.log(this); // Gives output {}


// When this is printed inside the function it gives many values in the output.


// NOTE : this.key only works when the function is made inside a object 

// function yaar(){
//     let username = "Harsh"
//     console.log(this.username); // Throws output as UNDEFINED 
// }

// yaar();

// const yaar = function(){
//     let username = "Harsh"
//     console.log(this.username); // Throws output as UNDEFINED  
// }

// yaar();




// ARROW Function 

// const yaar = () =>{ 
//     let username = "Harsh"
//     console.log(this.username); // Throws output as UNDEFINED  
// }

// yaar();




// ARROW FUNCTION 

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(4,6)); // Returns 10


// Implicit Return 

const sum= (num1, num2) =>  num1 + num2;

console.log(sum(4,7)); // Returns 11

// NOTE Curly Braces mein wrap kiya toh Return likhna padta hai or parenthesis lagate hai toh return krne ki jarurat nhi hai 

const sum1= (num1, num2) =>  (num1 + num2);

console.log(sum1(7,7)); // Returns 14
  

// Return a Object - To return a Object we must wrap it inside the parenthesis in Implicit Return

const sum2 = (num1, num2) =>  ({username: "Harsh"})

console.log(sum2(4,7)); // Returns 10


const myArray = [2,3,5,1,7,9];

