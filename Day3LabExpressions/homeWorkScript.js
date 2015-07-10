/**
 * Hakeem Anderson
 * 07-09-2015
 * SDI
 * 00
 */

    alert("Day 3 Lab Expressions")

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

var sparky = boxesOrdered*slices%people
console.log("The number of pieces remaining for Sparky "+sparky)

//Average Bill Shopping
//Weekly Grocery bills

var WGB = 5;

//Total amount spent

var TAS = 500.50

//Average Weekly Grocery Spending
// TAS/WGB
console.log("The average weekly grocery spending is "+TAS/WGB)
