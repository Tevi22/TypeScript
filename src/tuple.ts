//Tuple type is a kind of array which accepts more than one predefined type of data. 
//Arrays are used to represent a collection of similar objects, whereas tuples are used to represent a collection of different objects.

//Tuples provides an easy way to implement the same scenario with an array-like data structure, which is easy to access and manipulate.

//customerCreditInfo tuple with 3 different types of data
var customerCreditInfo: [string, Customer, number];
customerCreditInfo = ["I342", new Customer("I342"), 3000];

//A developer can initialize only one entry as per TypeScript data restriction length policy.  

//A compilation error will be thrown in below two cases:

//if you are trying to assign multiple entries in the first initialization. 
//if you try to initialize different datatypes directly to the tuple declared variable. 
//In order to overcome the above-mentioned compilation errors, you can use the push() method. 

let productAvailable: [string, boolean];
productAvailable = ["Samsung Galaxy J7", true];
productAvailable = ["Samsung Galaxy J7", false, "Samsung Galaxy J7", false]; //error
productAvailable.push("Samsung Galaxy J5", false);
productAvailable.push(false, "Samsung Galaxy J8");
productAvailable.push(false, "Samsung Galaxy J8", false, "Samsung Galaxy J8");