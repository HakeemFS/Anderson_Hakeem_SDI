
 /*
Hakeem Anderson
Section 00
7-25-15
Functions Assignment
 */


//alert("Testing to see if this works");

 //Ask the user if they would like to get an average for hours worked on Friday and Saturday
 var weekendPrompt = prompt("Would you like to find your average hours worked on the weekend?");
 //Prompt Validation
 while(weekendPrompt.toLowerCase() !="yes" && weekendPrompt.toLowerCase() !="no"){
  weekendPrompt=prompt("Please enter yes or no.");
 }


 //Creating Normal Function
 function averageWeekendHours (f,s){
  var totalTime = (f*s)/2;
  //Return Total
  return totalTime
 }

 //Function call to hoursWorked
 var time = averageWeekendHours(8,3);
 console.log("Your average hours worked on Friday and Saturday is "+time+" hours.");