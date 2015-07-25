
 /*
Hakeem Anderson
Section 00
7-25-2015
Random number
 */


//alert("Testing to see if this works.");

 //Create a funtion that will take in a user prompred max and min value and return a random number

 //Create variable or min value

 var min = prompt("We are going to find a random number between 2 numbers.\nWhat is the min value?");

 //Validate prompt
 while(isNaN(min) || min===""){
  if(isNaN(min)){
   min=prompt("Please only use numbers.\nWhat is the min value?");
  }else{
   min=prompt("Please do not leave blank.\nWhat is the min value?");
  }
 }

 //Number cast or parseInt
 min=Number(min);