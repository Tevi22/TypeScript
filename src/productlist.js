var productName = 'Samesung Gaxlaxy Note 7';
var productPrice = 999;
var productStatus = 'Avalible';
var productDiscount = 15;
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["GoldPlatium"] = 699] = "GoldPlatium";
    MobilePrice[MobilePrice["PinkGold"] = 650] = "PinkGold";
    MobilePrice[MobilePrice["SilverTitanium"] = 712] = "SilverTitanium";
})(MobilePrice || (MobilePrice = {}));
document.getElementById("pName").innerHTML = productName;
document.getElementById("pPrice").innerHTML = productPrice;
document.getElementById("pAvailable").innerHTML = productStatus;
document.getElementById("pDiscount").innerHTML = '%' + productDiscount;
// Display Price of Mobile Phone
document.getElementById('gold').innerHTML = MobilePrice.GoldPlatium;
document.getElementById('pinkgold').innerHTML = MobilePrice.PinkGold;
document.getElementById('silver').innerHTML = MobilePrice.SilverTitanium;
