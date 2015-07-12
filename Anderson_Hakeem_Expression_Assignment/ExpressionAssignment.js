/*
Hakeem Anderson
Section 00
7-11-15
Expression Assignment
 */


//alert("Testing to see if this works");

//Calculating average points per quarter through 4 quarters of basketball
//


//Points by quarter
var pointsScoredQuarterOne = parseInt(prompt("Enter your points scored in the 1st quarter"));
var pointsScoredQuarterTwo = parseInt(prompt("Enter your points scored in the 2nd quarter"));
var pointsScoredQuarterThree = parseInt(prompt("Enter your points scored in the 3rd quarter"));
var pointsScoredQuarterFour = parseInt(prompt("Enter your points scored in the 4th quarter"));

//Adding array to calculate Average
var pointsArray = [pointsScoredQuarterOne,pointsScoredQuarterTwo,pointsScoredQuarterThree,pointsScoredQuarterFour];
var total = pointsScoredQuarterOne+pointsScoredQuarterTwo+pointsScoredQuarterThree+pointsScoredQuarterFour;


//Finding the average
var average = total / pointsArray.length;
console.log("Your average points per quarter is " +average);