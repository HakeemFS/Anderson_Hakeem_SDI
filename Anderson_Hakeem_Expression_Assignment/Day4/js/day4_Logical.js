
 /*
Hakeem Anderson
Section 00
7-14-2015
Logical
 */


//alert("Testing to see if this works");

//Check the price of an item. Scooter
 var scooterCost = 700;
 var budget = 800;
 var paycheck = 500;

 // if the price of the scooter is less than our our budget it can be bought
 //And if our paycheck is over 400.

 if(scooterCost<budget){
     console.log("We can buy the scooter!")
 } else {
     console.log("The cost is too high for our budget")
 }

 if(paycheck>400){
     console.log("We can buy the scooter!")
 } else {
     console.log("Our paycheck is too small to buy scooter")
 }

 // Use the AND logical operator to test both conditions at one time

 if(scooterCost<budget && paycheck>400){
     console.log("Both the scooter is in budget and paycheck is high enough");
 } else {
    console.log("Sorry you cant buy the scooter");
 }

 //OR Logical Operator
 //Either one must be true

 //If the scooter is less than or equal to our budget OR if we wont the lottery than wecan buy the scooter

 var wonLottery = false;
 if(scooterCost<=budget || wonLottery){
     console.log("You have enough money to buy the scooter or you won the lottery");
 } else{
     console.log("Sorry, no scooter for you, keep playing the lottery");
 }