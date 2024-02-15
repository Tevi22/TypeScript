// Inhertance:
// Inheritance is the process of extending a class from an already existing 
//class and reusing the functions and properties of the inherited class in the subclass.

class Product {
    protected productId: number;
    constructor(productId: number) {
        this.productId = productId;
    }
    getProduct(): void {
        console.log('Product id is : ' + this.productId);
    }
}

// declaring Gadget class which extends properties from Product class 
class Gadget extends Product {
    constructor(public productName: string, productId: number) {
        super(productId);
    }
    getProduct(): void {
        //super.getProduct(); 
        console.log('Product id is : ' + this.productId + ' Product name is : ' + this.productName);
    }
}

// Gadget class object creation 
const g = new Gadget('Tablet', 1234);
// line to invoke getProduct method with the help of Gadget object 
g.getProduct(); 