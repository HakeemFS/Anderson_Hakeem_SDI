
 /*
Hakeem Anderson
Section 00
07-23-15
Arguments & Parameter's
 */


//alert("Testing to see if this works");

 //Arguments go in the function calls and these are the specific values
 //Perameters go in the fucntion definetion and cath the argements - Generic Containters

 //Create var for width and height
 var width = 10;
 var height = 20;

 //Create a funtion to calculate the area of a rectangle

 function calcArea(w,h){
  //Create car
   //width = 10;
   //height = 20;
  //calculate
  var area = w*h;
  //console
  console.log("The area of a rectangle with a width of "+width+" and height of "+height+"is "+area);

 }

 //call the function
 calcArea(width,height);

 //Find the area with width = 6 height = 7
 calcArea(6,7);

 //Ask the user
 var userWidth = prompt("Lets calculate the are of a rectangle\nPlease enter a width");

 //validate & number cast imput
 var userHeight = prompt("Pleae enter a height:");

 //How would I get the area
 calcArea(userWidth,userHeight);

 //Create a funciton that will calculate dog years

 function dogYears(humanAge){
  //Input a human year and spit out dog year
  //HumanAge*7 dog age
  var dogAge = humanAge*7;

  //aprint
  console.log("A dog who is "+humanAge+" is "+dogAge+" in dog years.")


 }

 //Calculate how old a 4 year old dog is in dog years

 dogYears(4);

 //Calculate a 7 year old dog
 dogYears(7);

 //Prompt the user for their dog age
 var yourDogAge = prompt("Lets figure out how old your dog is in dog years.\nPlease enter your dogs's human age.");

 //validate

 dogYears(yourDogAge);
