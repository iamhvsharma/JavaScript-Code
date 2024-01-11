// for of loop 

// ["","",""]
// [{}, {}, {}]

const arr = [1, 3, 5, 6, 7]

for (const num of arr) {
    console.log(num);
}

const quotes = "Life needs Happiness";

for (const quote of quotes) {
    console.log(quote);

}


// Maps

const map = new Map();

map.set('IN', "India");
map.set('FR', "France");
map.set('UK', "United Kingdom");

console.log(map);

for (const [key, value] of map) { // Destructuring of Array [key, value] in place of "key"
    console.log(key, ':-', value);
}


// for of method couldn't be used to iterate Objects

// const myObj = {
//     'game1' : 'GTA', 
//     'game2' : 'Taken 3'

// }

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
    
// }