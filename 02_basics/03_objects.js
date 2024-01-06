 // Singleton 
 // Object.create 

//  When Object is made with Constructor then the Object made is Singleton

// Object Literals : The way to declare Objects

const mySym = Symbol("Key1"); // Interview Question

const JsUser = {
    name: "Harshvardhan", 
    "Full name": "Harshvardhan Sharma", // To access this type of Keys the only way is to use square notation 
 
    // mysym: "mykey1", // Not the right way to take that symbol which we have declared 

    [mySym]: "mykey1", // Right way to access the declared symbo; 

    age: 19, 
    location: "Jaipur", 
    Email : "thedevharsh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],

}


console.log(JsUser.Email); // Dot notation 
console.log(JsUser["Email"]) // Swuare Notation 
console.log(JsUser["Full name"]) // Swuare Notation 

// To overwrite values of Objects

JsUser.Email = "thedevharshchanged@gmail.com";

// Method which helps us to freeze the overwriting of Keys within a object

Object.freeze(JsUser)

JsUser.Email = "thedevharshbadalgayi@gmail.com";