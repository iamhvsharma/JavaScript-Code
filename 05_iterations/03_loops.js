// Method to Iterate Objects

const myObj = {
    js : 'javascript', 
    cpp : 'C++', 
    py : 'Python',
    db : 'Database'
}

// for in loops is used to iterate on the basis of keys it extracts keys from the objects.


// for in loop is used to Iterate Objects ->
  
for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}`);
    
}



// for in loop in array

const programming = ["js", "rb", "py", "java","cpp" ];

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}

// It prints key or index of Array



// Maps cannot be iterated using for in loop

const map = new Map();

map.set('IN', "India");
map.set('FR', "France");
map.set('UK', "United Kingdom");

console.log(map);

for (const key in map) { 
    console.log(key);
}
