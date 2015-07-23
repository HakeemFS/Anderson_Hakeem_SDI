
 /*
Hakeem Anderson
Section 00
Date 7-23-15
Function Scopes
 */


//alert("Testing to see if this works");



 //
 //
 //
 var width=5;

 //Crate a variable called changeMe
 //Scoped to the main code
 //console.log
 console.log("Starting width is "+width);

 var changeMe = 7;
 console.log("The starting value of changeME is "+changeMe);

 //console log
 console.log("Starting width is "+width);

 //Create function that calculates perimeter

 function calcPeri(){

  //Create vari for width and height and perimiter
  //Try not to reuse variable names
  //But this is going to be impossible for larger files

  //This variable is scoped to the function calcPeri
  var width = 10;
  console.log("Width inside of function is "+width);
  var height = 20;
  var perimeter = width*2 + height*2;

  //Change the value of changeMe
  changeMe=15;
  console.log("Inside of the function changeME is "+changeMe);

  //Console log the perimeter
  console.log("The perimeter is "+perimeter);

 }

 console.log("Before the function call, width is "+width);
 console.log("Before the fucntion call changeME is "+changeMe);

//function
calcPeri();

 console.log("After the function call, width is "+width);

 //This will not work main code can not see inside a function
 //console.log("The value of is perimeter "+perimeter);

