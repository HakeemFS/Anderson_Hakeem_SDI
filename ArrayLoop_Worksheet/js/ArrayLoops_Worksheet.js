
 /*
Hakeem Anderson
Section 00
7-21-2015
Array Loops Worksheet
 */


//alert("Testing to see if this works");

 //Creating a variable & Validating the prompt

 var callsTakenWeekOne = parseInt(prompt("How many calls did you take in week one?"));
 while(isNaN(callsTakenWeekOne) || callsTakenWeekOne===""){
  callsTakenWeekOne=prompt("Do not leave blank\nUse only numeric values\nPlease enter your number of calls for week one.");
 }
  var callsTakenWeekTwo = parseInt(prompt("How many calls did you take in week two?"));
 while(isNaN(callsTakenWeekTwo) || callsTakenWeekTwo===""){
  callsTakenWeekTwo=prompt("Do not leave blank\nUse only numeric values\nPlease enter your number of calls for week two.");
 }
  var callsTakenWeekThree = parseInt(prompt("How many calls did you take in week three?"));
  while(isNaN(callsTakenWeekThree) || callsTakenWeekThree===""){
   callsTakenWeekThree=prompt("Do not leave blank\nUse only numeric values\nPlease enter your number of calls for week three.");
  }

//Adding an Array

 var totalCalls = [callsTakenWeekOne,callsTakenWeekTwo,callsTakenWeekThree];
 var total=0;


 for (var i=0; i<totalCalls.length;i++){
  total+=totalCalls[i];
 }



  //Console log value
console.log("The total calls made is " +total);
 alert("The total calls made is "+total);
