/*
Hakeem Anderson
Section 00
7-11-15
Casting Variables
*/


//alert("Testing to see if theis works");

//Casting variables means treating one variable like another

var stringVar = "6";
var results = 7 + stringVar;
console.log(results);

//Number() - treats what is inside the () like a number, if possible

var castingResult = 7 + Number(stringVar);
console.log(castingResult);

//Cast numbers as strings
//String()

var areaCode = 407;
var prefix = 555;
var lineNumber = 1234;

var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);
console.log(phoneNumber);


//All prompt() returns text strings!!
var videoGamesCurrent =prompt("How many video games do you currently own?");

var gamesBought = prompt("How many games did you buy today");
var totalGames = Number(videoGamesCurrent) + Number(gamesBought);
console.log(totalGames);

//Parsing Integers
//Looks through "text string" and returns the first interger (any number without a decimal)
//The first charchater in the "text string" Must be the number
//Spaces arent counted

var a = parseInt("40 years old");
console.log(a);

var b = parseInt("He is 40 years old");
console.log(b);

var c = Number("40 years old");
console.log(c);

var d = parseFloat("40.67 years old");
console.log(d);
//parseFloat allows decimal places


