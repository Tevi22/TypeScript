// Declaring enum variables and assigning default values
// Enum in TypeScript is used to give more friendly names to a set of numeric values.
// By default, enum’s first item will be assigned with zero as the value and the subsequent values will be incremented by one.
// Enum items can also be initialized with different values than the default value. If you set a different value for one of the variables, the subsequent values will be incremented by 1.
enum MobilePrice {Black = 250, Gold = 200, White = 300}

// function to colculate final amount
function calculateAmount(price: number): number{
    let discount: number;
    let totalAmount: number;
    if (price === MobilePrice.Gold) {
        discount = 5;
    } else if (price === MobilePrice.White) {
        discount = 8;
    } else {
        discount = 10;
    }
    totalAmount = price - price * discount / 100;
    return totalAmount;
}

// lines to populate the Actual and Final price of Black color Mobile
console.log('Actual price of the Mobile is $' + MobilePrice.Black);
console.log('The final price after discount is $' + calculateAmount(MobilePrice.Black));