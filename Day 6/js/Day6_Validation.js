
 /*
Hakeem Anderson
Section 00
Topic Validating
7-18-15
 */


//alert("Testing to see if this works");


 //isNaN(Item to test)
 //true if not a number
 //false if it is a number

 //To test blank we test (item ==="")

 //To test test strings
 //(item.toLowerCase() != "yes" && item.toLowerCase() != "no"

 //For validating we use a while loop
 //Use a while loop because we do not know how many times they will get it wrong

 //Ask for a number
 var userNum = prompt("Please enter a number.");
 //Directly after each prompt, validate for that prompt
 while(isNaN(userNum) || userNum===""){
  //re-propt using the same variable
  userNum=prompt("Please only user numbers and dont leave blank.\nPlease type in a number.");
 }
 console.log("After the while loop.");

 //Ask the user for red or black
 var color=prompt("Please choose red or black:");
 //validate
while(color.toLocaleLowerCase() !="red" && color.toLowerCase() !="black"){
 // re-prompt the user
 color=prompt("Please only type in red or black.\nPlease choose your color.");

}
 