const name = "Harshvardhan";
const repoCount = 50;

console.log(name + " "+ repoCount + " "+ "value");

// The above method is not recommended.

// Use below method which is called TEMPLATE

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



// Strings using Objects here every Character is a key value
const gameName = new String('Harshvardhan Sharma');
console.log(gameName);

// Printing a key value

console.log(gameName[2]);

// Understanding methods of a Object 

console.log(gameName.length); // Gives Total length of a Object
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.lastIndexOf(gameName));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,5); // In this method it doesn't take last value 

console.log(newString);

const newStringOne = gameName.slice(-14, 10); // Negative and Positive Both values can be given

console.log(newStringOne);

const newStringTwo = "    hvs@gmail.com    ";
console.log(newStringTwo);
console.log(newStringTwo.trim());

// Let's say if a person in a Url puts space then it is automatically replaced by {%20}

// In that condition we can use a replace method on the String

const url = "https://thedevharsh.com/harsh%20vardhan%20sharma";

// Then we can simply use Replace method to change that default %20

const newUrl = url.replace(/%20/g, '-'); // The function is searching for %20 and is replacing it with '-'
console.log(url.replace(/%20/g, '-')); // The function is searching for %20 and is replacing it with '-'

// If the parameters are given like this {/String/g, '-' } then all the match will be replaced => g flaged 
// If the parameters are given like this {"String", '-' } then the first match will be replaced => y Flaged

const urlSplit = newUrl.split('-')
console.log(newUrl.split('-')); // This method Splits on the basis of given Parameters and makes an array

console.log(urlSplit[0]); // Gives the first element of ARRAY
