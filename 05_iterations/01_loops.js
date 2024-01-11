// for 

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(i);
    
}


// Nested for loop 

// Nested for loop to print table from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j}`);
        console.log(i + "*" + j + "=" + i*j);

    }
    
}

let myArray = ["Flash", "Batman", "Spiderman"];

for(let i = 0; i <myArray.length; i++){
    const arrElement = myArray[i];
    console.log(arrElement);
}


//  Break and Continue 

// for(let i = 1; i <=20; i++){
//     if(i == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i = ${i}`);

// }



for(let i = 1; i <=20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i = ${i}`);

}



// While Loop 

let i = 0;
while(i <= 10){
    console.log(`Value of Index is ${i}`);
    i = i + 2;
}


let arr = 0;
while(arr<myArray.length){
    console.log(`Element of Arrays are ${myArray[arr]}`);
    arr = arr + 1;
}


// do While loop -> First do then check condition 

let score = 10;
// let score = 11;  // If condition is false still the loop will run once

do{
    console.log(`Score is ${score}`);
    score++;
}while(score<=10);