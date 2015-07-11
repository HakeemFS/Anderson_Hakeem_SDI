/**
 * Hakeem Anderson
 * 07-09-2015
 * SDI
 * 00
 */

    alert("Day 3 Lab Expressions");

//Dividing Pizza
//Slices of Pizza per box
var slices = 9;

//Number of people at the party
var people = 11;

//Number of Pizzas ordered
var boxesOrdered =3;

//Number of slices per person (SPP)

//Slices * boxesOrdered/People
var SPP = slices * boxesOrdered/people;
console.log("The number of slices per person "+SPP);


//Number of pieces for Sparky

var sparky = boxesOrdered*slices%people;
console.log("The number of pieces remaining for Sparky "+sparky);

//Average Bill Shopping
//Weekly Grocery bills

var WGB1 =90.17;
var WGB2 =112.22;
var WGB3 =64.32;
var WGB4 =86.40;
var WGB5 =101.25;

//Total amount spent

var TAS = WGB1+WGB2+WGB3+WGB3+WGB4+WGB5;

//Average Weekly Grocery Spending
var average = TAS/5;
console.log("The average weekly grocery spending is "+average);

//Discounts before and after tax

var originalPrice = 150;
var discountPercentage = .75;

//Amount after discount without tax
//originalPrice * discountPercentage

var discount = originalPrice * discountPercentage;
var AAD = originalPrice - discount;
console.log("The amount after the discount without tax is "+AAD);

var salesTaxPercentage = 0.6;

//Amount after discount with tax
//originalPrice*discountPercentage = 112.50

var AAT = 159
console.log("The amount after the discount with tax is "+AAT);






