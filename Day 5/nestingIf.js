
 /*
Hakeem Anderson
Section 00
7-16-15
Nesting
 */


alert("");


var temp=22;
var waterTemp=78;

 //test the temp
 //warm is 80 and above
 if(temp>80){
     //Code will run if temp is 80 or above
     console.log("Lets go to the beach!");
     //If the water is above 75 lets go swimming
     //If not let get a tan
     if(waterTemp>75){
         console.log("Let's go swimming!");
     } else{
         console.log("Let's go get a tan!");
     }
 } else{
     console.log("Let's go see a movie!");

     //ask if kids are going
     var kids=prompt("Are you bringing children?\nPlease type in yes or no.");

     //validate the kids promt
     //Expecting yes or no

     if(kids.toLowerCase()!="yes" && kids.toLowerCase() !="no"){
       //re-prompt the user
         kids = prompt("Pleae only type in yes or no!\nAre you bringing kids?");
     }
    

     //if kids are coming go see Minions if not go see Antman
//.toLowerCase() - changes a text to lower case

     console.log(kids.toLowerCase());
     //permanently change the value

     kids=kids.toLowerCase();
     console.log(kids);

     if(kids.toLowerCase()==="yes"){
         console.log("Go see the Minions!");
     } else{
         console.log("Go see Antman");
     }
 }

