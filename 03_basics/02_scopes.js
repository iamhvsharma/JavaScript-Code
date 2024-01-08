
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    
}

console.log(a); // Throws Error
console.log(b); // Throws Error
console.log(c); // Prints : 30 

// Let and Const are Block scoped and var is Global scoped 


function one(){
    const username = "Harsh";

    function two (){
        const website = "youtube.com"
        console.log(username);
    }
    // console.log(website);

    two();


}

one();


// If - else

if(true){
    const username = "Harsh"
    if(username === "Harsh"){
    const website = "youtube.com";
    console.log(username + website);
    }

}

// console.log(website);

// console.log(username);

console.log("+++++++++++++++++Interesting Topic ++++++++++++++++++");

function addOne(num){
    return num1 + 1;

}

addOne(5);

const addTwo = function(num){
    return num + 2;
}

addTwo(5) 