
 /*
Hakeem Anderson
Section 00
7-23-15
Functions
 */



//alert("Testing to see if this works");

 //Basic function structure
 //Function functionName(){}//Code to run

 printHello();

 //Create a function that will console log something
 function printHello(){
  //this code will run when the function runs
  console.log("This function is working");

 }

 //Create a function call that will start function
 printHello();
printMore();
 printHello();
 //Create a function that crates a different
 function printMore(){
  console.log("This is different text")
 }

 //Function call printMore
 printMore();

 //Crate a function that calculates the area of a rectangle

 function calcArea(){
  //Create variables for Width, Height and area
  var width = 20;
  var height = 30;
  var area = width*height;

  //Console log
  console.log("The area of the rectangle is "+area);


 }
 calcArea();