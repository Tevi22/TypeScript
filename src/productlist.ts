
let productName:string = 'Samesung Gaxlaxy Note 7';
let productPrice:number = 999; 
let productStatus:string = 'Avalible'
let productDiscount: number = 15


enum MobilePrice {GoldPlatium = 699, PinkGold = 650, SilverTitanium = 712}


document.getElementById("pName").innerHTML = productName;
document.getElementById("pPrice").innerHTML = productPrice;
document.getElementById("pAvailable").innerHTML = productStatus;
document.getElementById("pDiscount").innerHTML = '%'+productDiscount;

// Display Price of Mobile Phone

document.getElementById('gold').innerHTML = MobilePrice.GoldPlatium;
document.getElementById('pinkgold').innerHTML = MobilePrice.PinkGold;
document.getElementById('silver').innerHTML = MobilePrice.SilverTitanium;