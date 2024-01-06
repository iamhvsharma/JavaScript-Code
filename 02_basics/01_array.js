
// Array : The Array Object enables us to store multiple items of either same datatype of Different Data Type under the single variable name. Which is not possible in many other languages, there is always a restriction to store same data type elements inside a array.

// JavaSccript arrays are Resizeable
// JS Array copy operations creater shallow copies i.e Heap memory concept, Either you change a value from the copy or original array the value will be changed from all the places due to use of refernce for copying

const myArr = [ 1, 2, 3 , 4, 5 ];

const myHeros = ["Shaktiman", "Spiderman", "Arjuna", "Abhimanyu", "Balram", "Hanuman"];

const myArr2 = new Array(9, 4, 5, 7, 2);


// Array Methods 

myArr.push(6); // Inserts a value at the last of a Array
console.log(myArr);

myArr.pop(); // Deletes the last value from the array 
console.log(myArr);

myArr2.unshift(2); // Inserts a value at the starting of a Arraym, but this way is not recommended as the other keys of the array need to shift 1 index which increases the time complexity.
console.log(myArr2);

myArr2.shift(); // Deletes the first value from the starting of array and shifts the other keys by 1 index
console.log(myArr2);

 console.log(myArr.includes(5)); // Checks that the passed value is present or not int he array

 console.log(myArr.indexOf(3));

 const newArr = myArr.join(); // Changes type of Array from object to string 

 console.log(typeof(myArr));
console.log(typeof(newArr));





// Slice and Splice Method

// Slice Method Simply copy the elements with in the (range - 1) and then make a new array of those elements 

// Splice method manipulats the original array and takes out the elemets with in the range and forms a new array and the rest of elements except ranged elements remains in the original array.

const arr1 = [2,4,6,1,3,5,8];

console.log("Original Arr", arr1);

const arr2 = arr1.slice(0,2); // Range - 1 suggests that the last index will not be included
console.log("Original Arr", arr1);
console.log(arr2);

const arr3 = arr1.splice(1, 3); // Here the splice method is performed for the range in which the last index is included
console.log("Original Arr", arr1);
console.log("C", arr3);