// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);


// NOTE : Ensure that you compare same datatype


// console.log("2">1);
// console.log("02">1);

// Both of these will give output as True but this type of thing is not recommended
// Because sometimes it may not give predicted output

// Let's compare NULL 

console.log(null>0);
console.log(null<0);
console.log(null!=0);
console.log(null==0);
console.log(null<=0);
console.log(null>=0);

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// Avoid to use the above comparisions 

// The Reason is that an equality check == and comparisions > < >= <= works differently
// Comparisions convert null to a number, treating it as a Zero
// That's why null>=0 is true and null>

// NULL is converted to a number and treated as 0 when the equality and comparision both is checked Simultaneouslu <= >=


// Strict Check === => Checks value and Datatype both 

console.log("2"===2);
