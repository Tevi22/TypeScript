// boolean
let ShowImage: boolean = true;

// number
let productId: number = 1045

// string
let productName: string = "Samsung Galaxy J7";

// Template strings are types of string value that can have multiple lines and embedded expressions. 
//They are surrounded by the backquote\backtick (`) character and embedded expressions of the form ${expr}
let message: string = `The product name is ${productName}`;
let catalog = `The product in the catalog are
                TV
                Refigerator
                Airconditioner
                Geyser`;
console.log(catalog)

// any
//any type is used to declare a variable whose type can be determined dynamically at runtime with the value supplied to it. 
//If no type annotation is mentioned while declaring the variable, any type will be assigned by default.
let screenSize: any;
screenSize = 13.97
screenSize = "5.5-inch"

//Void
//void type represents undefined as the value. the undefined value represents "no value".
//A variable can be declared with void type as below:
let product: void = undefined;
//In the above example , variable declared with void datatype. It is not preferred as we can assign only undefined or null as value.

//function is declared with void return type
function displayProductDetails(): void {
    console.log("Product category is Gadget");
}
//void type is commonly used to declare function return type. The function which does not return a value can be declared with a void return type. 
//If you don’t mention any return type for the function, the void return type will be assigned by default.

// Never:
//Never is a new data type introduced in TypeScript in the year 2016. Never data type indicates that the situation will never occur.  
//Never can be used in functions that run in infinite loop or that in which the end of function is not reached at all.  

function Demo(msg: string): never {
    throw new Error(msg);
}

//The difference between void and never is that never does not take null and undefined as values, but void does take null and undefined as values.
//Examples

let test: never = null; //error
let demo: never = undefined; //error
let test: void = null;
let demo: void = undefined;

// Readonly:
//“Readonly” keyword can be used with Class declaration, type or interface in any TypeScript application development.  

//These members are normally assigned within the constructor of the Class.  
//They cannot be modified outside the class, but you access them outside the Class.  
//Class Readonly:

class Student {
    readonly Id: number;
    Name: string;
    constructor(code: number, name: string) {
        this.Id = code;
        this.Name = name;
    }
}
let student = new Student(1, "Mike");
student.Id = 4; //Compiler Error 
student.Name = 'Bill';

//Interface ReadOnly :
interface IStudent {
    readonly Id: number;
    Name: string;
}
let studentObj: IStudent = {
    Id: 1,
    Name: "Mark"
}
studentObj.Id = 9; // Compiler Error: Cannot change readonly 'Id' 

//“Readonly” can be considered same as const keyword but const is applied on variables whereas readonly is applied on properties. 

//Symbol:
//Symbol is one of the primitive data types in TypeScript which was introduced in the year 2018.  

//It is possible to create an empty symbol value using a constructor or with a string key as shown below: 

let sym1 = Symbol(); //constructor usage 
let sym2 = Symbol("Jack"); // optional string value 

//If you compare two symbols, they are always unique and immutable. 
//Consider the below-given code: 

let sym1 = Symbol();
let sym3 = Symbol();
if (sym1 === sym3)
    console.log("They are same");
else
    console.log("They are unique");
//As in Line no 3 while comparing both symbols, by default, code will always return ‘They are unique’ message.
//Also, unlike other types, developers are not provided with any built -in support for methods or properties declarations using the Symbol datatype.

//Type Annotations:
//Type Annotation is a way to enforce type restriction to a specific variable or a function. 
//If a variable is declared with a specific data type and another type of value is assigned to the variable, a compilation error will be thrown.

let productId: number = 1045;
productId = "Mobile"; //error

// function is defined with parameter of number and string as return type
function getProductDetails(productId: number):string{
    return "Product ID"+productId
}

getProductDetails("Mobile"); //Error