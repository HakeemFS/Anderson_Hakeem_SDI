
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


 //Creating Function
 function averageWeekendHours (f,s){
  var totalTime = (f*s)/2;
  //Return Total
  return totalTime
 }

 //Function call to hoursWorked
 var time = averageWeekendHours(8,3);
 console.log("Your average hours worked on Friday and Saturday is "+time+" hours.");

 //Anon Function for Monday & Tuesday's hours

var mondayTuesday = function(m,t){
 var mtHours = (m*t)/2;
 return mtHours;
};

 //Function call to anon function
 var average = mondayTuesday(8,12);
 console.log(average);

 /*
 //Test Values
 f,s = 8,3
 m,t = 8,12
  */