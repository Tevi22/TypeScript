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

//Variadic Tuples
//Variadic tuple types in TypeScript allow you to define tuple types with a variable number of elements. 

// Define a tuple type with a variable number of elements
type VariadicTuple<T> = [T, ...T[]];

// Examples
const tuple1: VariadicTuple<number> = [1, 2, 3];
const tuple2: VariadicTuple<string> = ['a', 'b', 'c'];
//In this example, VariadicTuple<T> is a tuple type that starts with an element of type T and is followed by zero or more elements of the same type T. 
//The ...T[] is a rest element that represents the rest of the tuple.
//You can also use this approach for mixed types:

// Define a tuple type with mixed types
type MixedTuple<T, U> = [T, U, ...U[]];

// Examples
const mixedTuple1: MixedTuple<number, string> = [1, 'a', 'b', 'c'];
const mixedTuple2: MixedTuple<boolean, number> = [true, 1, 2, 3];
//Here, MixedTuple<T, U> is a tuple type that starts with an element of type T, followed by an element of type U, and then zero or more elements of type U.
//You can also use recursion to define more complex variadic tuple types:

// Define a variadic tuple type with recursion
type NestedVariadicTuple<T> = [T, ...NestedVariadicTuple<T>[]];

// Example
const nestedTuple: NestedVariadicTuple<number> = [1, [2, [3, 4], 5], 6];
//In this example, NestedVariadicTuple<T> is a tuple type that can have nested tuples of the same type T.
//Variadic tuple types provide flexibility when working with tuples of varying lengths and allow you to create more generic and reusable types.

//In TypeScript, T and U are commonly used as generic type parameters, which represent placeholder types that can be replaced with specific types when you use the generic type.

//For example, in the following type definition:
type MixedTuple<T, U> = [T, U, ...U[]];

//Here, T and U are generic type parameters. When you use MixedTuple, you'll provide specific types for T and U. For instance:
const mixedTuple: MixedTuple<number, string> = [1, 'a', 'b', 'c'];
//In this case, number is the specific type for T, and string is the specific type for U. 
//The mixedTuple variable is a tuple where the first element is a number (T), the second element is a string (U), and the rest of the elements are strings (...U[]).

//Labeled Tuple Elements
type Progress = [start: number, end: number]; 
//You can have Labeled Tuple along with rest parameters and optional elements as below: 

type Demo = [one: number, two?: string, ...rest: any[]]; 
//Rules for using labeled tuples as below : 
//All elements in the tuple must be labeled otherwise the code would throw error as shown below.  
type Test = [first: string, number];//error 

//Labels used while destructuring doesn’t require variables to be named differently as shown below.  
function Demo(x: [first: string, second: number]) { 
    // we need not name these parameters as ‘first’ and 'second' 
    const [a, b] = x; 
}

// Example of Labeled tuple implementation:

// declaring a Tuple 
let productavailable:[productName : string,availability: boolean]; 
// assigning value to Tuple 
 productavailable = ['Samsung Galaxy J7', true]; 
 // Adding new value to Tuple 
productavailable.push('Samsung Galaxy J5', false); 
// logic to check product availability based on datatype of declared Tuple variable 
for (const item of productavailable) { 
     if (typeof item === 'string') { 
     this.productName = item; 
     } else if (typeof item === 'boolean') { 
        this.availability = item; 
         if (this.availability === true) { 
             console.log(`The product ${this.productName} is available`); 
         } else if (this.availability === false) { 
             console.log(`The product ${this.productName} is not available`); 
         } 
     } 
} 

