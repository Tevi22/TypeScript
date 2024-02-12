const sym1 = Symbol();
let s1 = Symbol();
console.log(typeof s1); //symbol
let s2 = Symbol("First Symbol");
console.log(s2.toString()); // Symbol(First Symbol)
let s3 = Symbol();
let s4 = Symbol();
console.log(s3 === s4); //false
