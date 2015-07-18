
 /*
Hakeem Anderson
Section 00
7-16-2015
Conditionals Homework
 */


//alert("Testing to see if this works");
 /*
 Tier 1 Prize = 1,000+ Tickets
 Tier 2 Prize = 800 - 999 Tickets
 Tier 3 Prize = 500 - 799 Tickets
*/

 //Calculating what prize you can buy with Carnival Tickets

 var ticketNumber =prompt("How many tickets do you have?\nPlease enter a number.");

 if(ticketNumber>=1000){
  console.log("You earned a Tier 1 Prize!");
 }else if(ticketNumber<=999){
  console.log("You earned a Tier 2 Prize!");
 }else if(ticketNumber<=799){
  console.log("You have earned a Tier 3 Prize!");
 }else if(ticketNumber<=499){
  console.log("Sorry, you do not have enough tickets for a Prize");
 }

