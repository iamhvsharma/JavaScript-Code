// Singleton Object or object using constructors

// Two ways to make objects 

// const tinderUser = new object(); 
// const tinderuser = {}

const tinderUser = {};

tinderUser.id = "abc123";
tinderUser.name = "Harshvardhan Sharma";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


// Nested Object i.e Object in Object

const regularUser = {
    email: "jaishreeram@gmail.com",
    fullname : {
        userfullname :{
            firstname: "Harshvardhan",
            lastname : "Sharma",
        }
    }
}



console.log(regularUser.fullname.userfullname.firstname);

// Optional Chainning - If a key name doesn't exist then it is used to reduce if else statements
console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const objectMerge = Object.assign( {}, obj1, obj2);

console.log(objectMerge);
console.log(obj1);

// Note : Object.assign( target{}, source obj1,2...);
// In this synatax the empty object is a target object where all the objects elements will be assigned but if we are not using it then the elements of all the object will be copied to first object passed in the parameter and also in the returned object 


// Mostly we will use Spread operator to merge 2 objects 

const obj3 = {...obj1, ...obj2};
console.log(obj3);


// When the value will arrive from databases

const users = [
    {
        id:1,
        name: "harsh",
    },
    {
        id:2, 
        name: "Shyam",
    },
    {
        id:3,
        name: "Mahi",
    },
]
    

users[1].name;

console.log(tinderUser);

console.log(Object.keys(tinderUser)) // Method to get all the keys of a object and store them in array

console.log(Object.values(tinderUser)) // Method to get all the values of a object and store them in a array

console.log(Object.entries(tinderUser)); // Method to get all the key value pair and store a single key value pair into a array individually 


// Destructuring of Objects

const collegeFaculty = {
    HeadOfDepartment : "Budhesh Kanwar",  
    deputyHeadOfDepartment : "Alka Rani",
    favoriteTeacher: "Charul Bapna",
}

// Destructuring 
const {HeadOfDepartment} = collegeFaculty;
console.log(HeadOfDepartment);

const {deputyHeadOfDepartment : dyHod} = collegeFaculty; // Syntax used to give alias name or aka variable name
console.log(dyHod);


// The above method to access a key value of a object is not working in a nested object


// json

// {
//     "name": "Harshvardhan",
// }

// API Can be found in Array

/* 
[
    {},
    {},
]
*/

// A popular api : randomuser me 

// Copy API and use Json Formatter to Format and Beautify 
// To make it easy to study