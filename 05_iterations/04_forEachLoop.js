// for Each Function 


const lang = ["js", "cpp", "py", "java", "sql", "ruby"]


// With call back function -> A function is called a Callback Function when the function doesn't have any name just function () {}
// lang.forEach(function (item) {
//     console.log(item);
// })


// With arrow function 
// lang.forEach((item)=> {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// lang.forEach(printMe);




// When we use forEach, it not only brings the value it also brings the index number and a complete array list

// let's see how

lang.forEach((item, index, arr) => 
{
    console.log(item, index, arr);
})


const myCoding = [
    {
        langName : "java",
        langFileName : "java"
    },
    {
        langName : "python",
        langFileName : "py"
    },
    {
        langName : "C++",
        langFileName : "cpp"
    }
]


myCoding.forEach((item)=>{
    console.log(item.langName, ':-', item.langFileName);
})


// NOTE : for each loop doesn't return any value so we cannot store the values in another variable


// Example

// const value = lang.forEach((item) => {
//     console.log(item);
//     return item; // With "return" still not returning any value and without return it also not returns any value
// })

// console.log(value);  //-> Prints undefined it means the forEach is not returning any value 



// FILTER - Filter returns the value and allow us to store in different variables

const myNums = [1, 2, 3, 4, 5, 6, 7];

// Proper Syntax 

// const newNums = myNums.filter((num) =>{
//     return num < 4; // In this type of Syntax return keyword is mandatory
// })


// myNums.filter((num)=> num < 4)

const newNums = myNums.filter((num)=> num < 4)

console.log(newNums);



// To store the elements of a Array in diiferent array we can follow the below method 

// Declare a Emmpty array 

const newArr = [];

// Use for each and conditional statement
myNums.forEach((num) => {
    if(num < 4) {
        newArr.push(num);
    }
})

console.log(newArr);


// Next Concept


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNumbers = myNumbers.map((num) => {return num + 10})

// console.log(newNumbers);

// Chainning - To use multiple methods simultaneously 

const newNumbers = myNumbers.map((num) => num * 10).map((num) =>num + 1)

console.log(newNumbers);




/