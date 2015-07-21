
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

 //Tier 1 Prizes = Xbox One
 //Tier 2 Prizes = Beats Headphones
 //Tier 3 Prizes = Hoodie



 if (ticketNumber>=1000){
  prompt("You are a Tier 1 Prize Winner!\nYour prize is an Microsoft Xbox One!\nPlease type 1 on your keyboard to confirm your prize");
if (1) {
 prompt("You chose to redeem your prize the Xbox One now!\nIs that correct?\nPlease type Yes or No");
 if ("Yes")
  alert("Enjoy your Xbox One!");
  else if ("No")
  alert("Ok! Keep your tickets for another time!");
  else if (ticketNumber>=800 && ticketNumber<1000){
   prompt("You are a Tier 2 Prize Winner!\nYour prize is a pair of Beats by Dre Headphones!\nPlease type 2 on your keyboard to confirm your prize.");
   if (2){
    prompt("You chose to redeem your prize Beats by Dre headphones now!\nIs that correct?\nPlease type Yes or No");
    if ("Yes")
    alert("Enjoy your Beast by Dre Headphones!");
     else if ("No")
     prompt("Ok! Keep your tickets for another time!");
    else if (ticketNumber>=500 && ticketNumber<800){
     prompt("You are a Tier 3 Prize winner!\nYou won a Hoodie!\nPlease type 3 on your keyboard to confirm your prize.");
     if (3){
      prompt("You chose to redeem your prize Hoodie now!\nIs that correct?\nPlease type Yes or No");
      if ("Yes")
      alert("Enjoy your stylish Hoodie!");
      else if ("No"){
       alert("Ok! Keep your tickets for another time!");

      }
     }
    }
   }
  }
 }
}





/*
//How many tickets do you have?
11200
//Choose 1 for Xbox One.
1
//You Chose the Xbox One is that correct?
Yes
Alert
Enjoy your Xbox one!

 */