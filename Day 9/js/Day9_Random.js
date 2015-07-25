
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

 //Variable for max
 var max=prompt("Pleae enter the max value");

 //Validate prompt
 while((isNaN(max) || max==="") || max<=min){
  if(isNaN(max)) {
   max = prompt("Please only use numbers.\nWhat is the max value?");
  } else if (max<=min && man!=""){
   max=prompt("Please make sure the ax value is grater than the min value of "+min+".\nWhat is he max value?");

  }else{
   max=prompt("Please do not leave blank.\nWhat is the max value?");
  }
 }

 //Number cast
 max=Number(max);