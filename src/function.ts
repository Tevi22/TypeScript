//Function

//Parameter Types and Return Types

//Function is defined with parameter of number type and string as return type
function getProductDetails(productId: number): string {
    return "Product ID" + productId;
}

//Invoking function using string parameter type,throws compilation error saying "Argument of type 'string' is not assignable to parameter of type 'number'"
getProductDetails("Mobile"); //Error

// A function whose declared type is neither 'void' nor 'any' must return a value.

// Arrow Function
//Arrow function is a concise way of writing a function. Whenever you need a function to be written within a loop, the arrow function will be the opt choice.
//Do not use the function keyword to define an arrow function.
//Syntax : (parameter)=>function body

var getProductDetail = (productId: number): string => { return "Product ID" + productId; }

// 'This' keyword
//Example 1
class Product {
    productName: string = "Mobile";
    getProductDetails(): string {
        //this has Product class scope, so we can access productName
        return "Product: " + this.productName;
    }
    testThisFunction() {
        setTimeout(
            //this has Product class scope as it is defined using arrow function.Hence we can //access productName declared within Product class.
            () => { console.log(this.productName); }, 100);
    }
}

//Example 2

class Product {
    productName: string = "Mobile";
    getProductDetails(): string {
        //this has Product class scope, so we can access productName
        return "Product: " + this.productName;
    }
    testThisFunction() {
        setTimeout(function () {
            //this has current function scope as it is used within callback //function.Hence we cant access productName declared within Product class. //This will log in console as undefined output.
            console.log(this.productName);
        }, 100);
    }
}

// Function Types
//Function types are a combination of parameter types and return type. Functions can be assigned to variables.
//While assigning a function to a variable make sure that the variable declaration is the same as the assigned function’s return type.

//Example

function getProductDetails(productName: string): string {
    return "Product: " + productName;
}

//Correct way of assigning
let productName: string = getProductDetails("Mobile");

//Incorrect way of assigning
//Assigning function with string return type to number type variable. This throws compilation error saying "Type 'string' is not assignable to type 'number'"
let productName: number = getProductDetails("Mobile");//Error

//Optional and Default Parameters

//TypeScript treats every function parameter as mandatory. So when a function is compiled, the compiler will check whether there is a value supplied to all the parameters of the function, or else it will throw a compilation error.

//Consider the code below:

function getProductDetails(productName: string, productId: number): string {
    return "Product: " + productName + " " + productId;
}
let productName: string = getProductDetails("Mobile");//Error

//In the above example , at line no. 4  we are invoking getProductDetails function with single parameter.
//This throws compilation error "Supplied parameters don not match any signature of call target". 

//Optional Parameters:
//The Optional parameter is used to make a parameter, optional in a function while invoking the function.
//If you rewrite the previous code using an optional parameter, it looks like the below:

//Adding ? after parameter name makes parameter , optional
function getProductDetails(productName: string, productId?: number): string {
    return "Product: " + productName + " " + productId;
}
let productName: string = getProductDetails("Mobile");
//An Optional parameter must appear after all the mandatory parameters of a function.

//Defualt Parameters

//Default parameter is used to assign the default value to a function parameter.
//If the default parameter comes before a required parameter, you need to explicitly pass undefined as the value to get the default value.

//Clothing is assigned as deafult value to productName parameter
function getProductDetails(productName: string = "Clothing", productId: number): string {
    return "Product: " + productName + " " + productId;
}
//Access function without default parameter, throws compilation error : "Supplied parameters do not match any signature of call target
let productName: string = getProductDetails(101);//Error
//Pass undefined as value for default parameter.Since we have already set default value for the same , function takes that value to process the same.
let productName: string = getProductDetails(undefined, 101);

// Rest Parameter:
//The rest Parameter is used to pass multiple values to a single parameter of a function. It accepts zero or more values for a single parameter.
//1. The rest Parameter should be declared as an array.
//2. Precede the parameter to be made as the rest parameter with triple dots.
//3. The rest parameter should be the last parameter in the function parameter list.

//Preceding parameter with triple dots makes it a rest parameter. Rest parameter by default will have array type declaration
function getProductDetails(productId: number, ...productName: string[]): string {
    return "Product: " + productName + " " + productId;
}
//We can pass number of values for the Rest parameter or even leave it //empty
let productName: string = getProductDetails(101, "Mobile", "Furniture");