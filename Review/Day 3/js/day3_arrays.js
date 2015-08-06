/*
Hakeem Anderson
Section 00
3-11-15
Arrays
 */

//alert("Arrays");

//Create a basic array
//Picking Oranges
var orangeBins = [30,500,10002];

//How many oranges did we pick?
var totalOranges = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(totalOranges+" oranges were picked in 3 days.");

//Average numbers of oranges picked
var averageOranges = totalOranges/orangeBins.length;

//Length property of arrays
console.log(orangeBins.length);


console.log("The average number of oranges picked is "+averageOranges);

//Create an array of Avengers
var avengerNames = ["Iron-man", "Captian America", "Hawkeye", "Hulk"];

//Print
console.log(avengerNames);

//Access a specific item in the array
console.log(avengerNames[1]);

//Use a variable as an index number
var num = 2;
console.log(avengerNames[num]);

//Set a specific item
avengerNames[3]="Thor";
console.log(avengerNames);

//Add a new item in out array
avengerNames[4] = "Falcon";
console.log(avengerNames);

//Add a new item
avengerNames[avengerNames.length] = "Black Widow";
console.log(avengerNames);

//Create new array for fruits
var fruitArray = ["banana", "pear", "peach", "strawberry"];
console.log(fruitArray);

//Push - method or a function of arrays
//Adds it to the end of the array
fruitArray.push("pineapple");
console.log(fruitArray);
console.log(fruitArray[4]);

fruitArray.push("date");
console.log(fruitArray);

//Pop method - removes the last item in the array And returns it
var caught = fruitArray.pop();
console.log(fruitArray);
console.log(caught);

//splice - method used for adding and removing items from array
//splice(position, # of items to remove, items to put in)
fruitArray.splice(0,0,"lemmon","cherry");
console.log(fruitArray);