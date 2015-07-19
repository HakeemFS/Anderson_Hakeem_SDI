
 /*
Hakeem Anderson
Section 00
7-16-2015
Conditionals Homework
 */


//alert("Testing to see if this works");
 /*
 Tier 1 Prize = 1000+ Tickets
 Tier 2 Prize = 800 - 999 Tickets
 Tier 3 Prize = 500 - 799 Tickets
*/

 //Calculating what prize you can buy with Carnival Tickets


 var ticketNumber =prompt("How many tickets do you have?\nPlease enter a number.");

 //Is your ticket amount high enough for a prize
 //Ternary Conversion
 (ticketNumber>499)? console.log("You are eligible for a Prize"): console.log("Sorry, you do not have enough tickets.");

//Conditionals
 if(ticketNumber>=1000) {
  console.log("You earned a Tier 1 Prize!");
 }else if (ticketNumber>=800 && ticketNumber<1000){
  console.log("You earned a Tier 2 Prize!");
 }else if(ticketNumber>=500 && ticketNumber<800){
  console.log("You have earned a Tier 3 Prize!");
 }else if(ticketNumber<=499) {
  console.log("Sorry, you do not have enough tickets for a Prize");
 }
  //Validate prompt
  if(isNaN(ticketNumber) || ticketNumber===""){
   if(isNaN(ticketNumber)){
    prompt("Please only use a numeric value");
   }else
   prompt("Do not leave blank, please enter a number.");
       }

 //Selecting your Prize

 //Tier 1 Prizes = Xbox One || Playstation 4
 //Tier 2 Prizes = Beats Headphones || SmartWatch
 //Tier 3 Prizes = Hoodie || Tee Shirt



 if (ticketNumber>=1000){
  prompt("You are a Tier 1 Prize Winner!\nYou won your choice between an Xbox One or Playstation 4!\nChoose 1 on your keyboard for the Xbox One.\nChoose 4 on your keyboard for the Playstation 4.");
if (1) {
 prompt("You chose the Xbox One!\nIs that correct?\nPlease type Yes or No");
 if ("Yes"){
  alert("Enjoy your Xbox One!");
 }
}
 }




/*
//How many tickets do you have?
1200
//Choose 1 for Xbox One and 4 for Playstation 4.
1
//You Chose the Xbox One is that correct?
Yes


 */