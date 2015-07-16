
 /*
Hakeem Anderson
Section 00
7-16-15
Conditionals
 */


//alert("Testing to see if this works");

 //Test a steak temp to see if it is done

 /*
  Extra-rare or Blue very red and cold 115–120 °F
  Rare (saignant)	cold red center; soft	125–130 °F
  Medium rare (à point)	warm red center; firmer	130–140 °F
  Medium (demi-anglais)	pink and firm 140–150 °F	145 °F and rest for at least 3 minutes
  Medium well (cuit)	small amount of pink in the center 150–155 °F
  Well done (bien cuit)	gray-brown throughout; firm	160 °F+	160 °F for ground beef
  */

// create var for steak temp
 var steakTemp = prompt("What is the temp (In F) of your steak?");

/*
 //Validate to test for blank
 if(steakTemp===""){
 //This code will run if the user leaves prompt blank
  steakTemp=prompt("Please do not leave blank.\nWhat is the temp of your steak?");
 }


//Validate the user prompt

 console.log(isNaN(7));
 console.log(isNaN("Car"));
 if(isNaN(steakTemp)){

//Code will run if steak temp is not a number
//Re-Prompt using the same variable for the user

 steakTemp=prompt("Please use numbers only.\nWhat is the Temp (in F) of your steak?");
 }
 */

//Combine validation
if(isNaN(steakTemp) || steakTemp===""){
//RePrompt
if(isNaN(steakTemp)){
 steakTemp=prompt("Please only use numbers.");
} else{
 steakTemp=prompt("Please do not leave blank.\nEnter a temp in F.");
}

}
 




 if(steakTemp<=115){
  console.log("This steak is raw do not eat it!");
 } else if(steakTemp<=120){
  console.log("This steak is Extra-Rare!");
 } else if(steakTemp<130){
  console.log("This steak is Rare!");
 } else if (steakTemp<=140){
  console.log("This steak is Medium-Rare!");
 } else if(steakTemp<=150){
  console.log("This steak is Medium.");
 } else if(steakTemp<=160){
  console.log("This steak is Medium-Well");
 } else {
  console.log("This steak is Well-Done!");
 }