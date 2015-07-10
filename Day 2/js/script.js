/*
This is going to be a multi lined comment
Hakeem Anderson
7-9-15
SDI Section 00
Day 2 Coding Basics
 */
//alert("This is making sure our js file is connected");

//This is a single lined comment
//Usually will describe what comes right after

/*
Multi-lined comment
Anything between the stars and slashes is ignored by the browsers
 */

//Alert - gives the user information but returns nothing to us
alert("Welcome to SDI!");

//Console Logging information
console.log("This is the console. Learn to love it!");

//Declare a variable
//Start with the keyword var
var whatever; //Declaring of a variable
//Define the variable
whatever = 45;
// Create a storage container = value ;

//Declare and define a variable
var a =2;

//Send variable value to the console so we can see it
console.log(a);

//Change the value of a variable
a=6;
console.log(a);

//Add 3 to the current value of a
a=a+3;
console.log(a);

//Create another variable
var b;
b=a+3;

console.log(a);
console.log(b);

//Simple Math
//Find our age

//Create variable for year born
var yearBorn = 1991;
var age = 2015 - yearBorn-1;
console.log(age);


//Math!
//+,-,*, /

//Find the area of a triangle
var width = 8;
var height = 7;

var areaTriangle = width*height/2;
console.log(areaTriangle);

// Modulo - %
// Gives you the remainder
var remainder = 31%3;
console.log(remainder);

//Find out if even or odd
// Modulo by 2
var evenOrOdd = 66%2;
console.log(evenOrOdd);
// 0 means even
// 1 means odd

//Assignment Operators
/*
= Assignment Operator - "is"
++ Adds 1 to the current value of the variable
-- Subtract 1 from the current value
+= Addition Assignment Operator - adds the value after it
-= Subtraction Assignment Operator - subtracts the value after it from the current value
/= Division Operator - divides by the current value
*= Multiplication Assignment Operator - Multiplies the current value
 */

var tester = 5;
tester++; // tester = tester+1;
tester--; // tester = tester-1;
tester +=3; // tester = tester +3;
tester -=6; // tester = tester -6;
tester /=3; // tester = tester/3;
tester *=6; // tester = tester*6

console.log(tester);
