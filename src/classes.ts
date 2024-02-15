// What is a Class
//Class is a template from which objects can be created.
//It provides behavior and state storage.
//It is meant for implementing reusable functionality.
//Use a class keyword to create a class.

//Example:

class Product {
    productId: number;
    getProductDetails(productId: number): string {
        return "Product ID is" + productId;
    }
}

//Constructor

//A constructor is a function that gets executed automatically whenever an instance of a class is created using a new keyword.
//To create a constructor, a function with the name as a "constructor" is used.
//A class can hold a maximum of one constructor method per class. 
//You can use optional parameters with a constructor function as well.

//Example:

class Product {
    productId: number;
    //Parameterized constructor is used to initialize productId property
    constructor(productId: number) {
        this.productId = productId;
    }
    getProductId(): string {
    }
}
//Creating instance of class with parameterized constructor
var product: Product = new Product(1234);

// Access Modifiers

//Public:
// Defualt access modifier. Properties declared as public are accessible outside class

class Product {
    //Declaring productId property using public keyword
    public productId: number;
    constructor(productId: number) {
        this.productId = productId;
    }
}
var product: Product = new Product(1234);
//Accessing productId outside class since it is declared using public keyword
console.log(product.productId);

//Private:
// Properties and methods declared with private access are accessible within class but not outside the class

class Product {
    //Declaring productId property using private keyword
    private productId: number;
    constructor(productId: number) {
        this.productId = productId;
    }
}
var product: Product = new Product(1234);
//Accessing productId outside class.Since it is declared using private keyword it is not accessible outside class.This line throws compilation error
console.log(product.productId);

//Protected:
// Properties and methods declared with protected access are accessible withing class as well as within inherited classes

class Product {
    //Declaring productId property using protected keyword
    protected productId: number;
    constructor(productId: number) {
        this.productId = productId;
    }
}
class Gadget extends Product {
    getProduct(): void {
        //Accessing productId inside inherited class since it is declared using protected keyword
        console.log("ProductID" + this.productId);
    }
}
var g: Gadget = new Gadget(1234);
g.getProduct();

// Static Access Modifer
//This keyword can be used to declare a class variable or method.
//1. A static variable belongs to the class and not to the instance of the class.
//2. A variable or function declared with a static keyword can be accessed using the class name instead of the instance of the class.
//3. Static variables are initialized only once, at the start of the execution.
//4. A single copy of the static variables would be shared by all instances of the class.
//5. A static variable can be accessible inside the static function as well as the non-static function.

class Product {
    //productName property is declared using static keyword
    static productName: string = "Mobile";
    //getProductDetails function is declared using static keyword and accessing productName property within it
    static getProductDetails(): string {
        return "Product Name is" + Product.productName;
    }
    getProduct(): string {
        //accessing static property within non-static function
        return "Product Name is" + Product.productName;
    }
}
Product.productName = "Tablet";
//setting value for static property and accessing the same using property name and function name. 
console.log(Product.productName);
console.log(Product.getProductDetails());

