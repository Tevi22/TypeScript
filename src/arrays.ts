//Using datatype[] declaration
//String array is created using string[] declaration
let manufacturers:string[] = ["Samsung","Apple","Sony"]; 

//Using Array<type> declaration
//String array is created using Array<type> declaration
let manufacturers : Array<string> = ["Samsung","Apple","Sony"]; 

//Using any[] declaration
//It accepts any type of data
let products : any[] = ["Mobile",12500,true];

//Adding to an Array

//Adding data using push function.Make sure that the type of pushed data is same as array type, or it will generate compilation error.
let products:string[]=["Mobiles","Tablets"];
products.push("Television");
products.push("Air Conditioners");

//Added datas using index reference
let products:string[]=["Mobiles","Tablets"];
products[2]="Television";
products[3]="Air Conditioners";

//Removing items from an Array
//Data can be removed from an array using the pop function or splice function

//Using pop() function
let products:string[]=["Mobiles","Tablets","Television"];
products.pop(); // last item 'Television' is removed

//Using splice() function
let products:string[]=["Mobiles","Tablets","Television"];
products.splice(1,2); // remove items at index 1 and 2