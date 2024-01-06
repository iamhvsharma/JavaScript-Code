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
console.log(JsUser["Email"]) // Square Notation 
console.log(JsUser["Full name"]) // Swuare Notation 

console.log(JsUser[mySym])

// To overwrite values of Objects

JsUser.Email = "thedevharshchanged@gmail.com";

// Method which helps us to freeze the overwriting of Keys within a object

// Object.freeze(JsUser); // Freezes a Object Due to which the key values cannot be changed  

JsUser.Email = "thedevharshbadalgayi@gmail.com";

console.log(JsUser);



// Function in JS

JsUser.greetings = function() {
    // console.log("Helloww user, How are you doing?")
    
    // Console.log using template
    console.log(`Hello ${this.name}, How are you doing?`);

    // "this" is used when we want to reference same object to access it's keys
}

console.log(JsUser.greetings());



