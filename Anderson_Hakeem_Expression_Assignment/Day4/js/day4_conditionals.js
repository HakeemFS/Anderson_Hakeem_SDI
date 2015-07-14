/**
 Hakeem Anderson
 Section 00
 7-14-2015
 Conditionals

 */

//alert("Testing to see if this works!")

//Basic conditional IF Statement
// if(condition to test) { Code to run if true.}

//Create a Boolean variable

var oldEnough = true;

//if the child is old enough tell him he can ride the coster
//else() - will run if the if statement does not run
//CatchAll
if(oldEnough){
    //code inside of the {} will run if oldEnough is a boolean of true
    console.log("You can ride the coster!");
} else {
// this code will run if the if block does not run!
// if oldEnogh evaluates to a boolean of false
    console.log("Sorry you are too young to ride.");
}

//Relational expressions - operrations
//test the kids height


var kidHeight = 42;

var sneakerLift =2;

//if the child is 48 or taller they can ride the ride
if(kidHeight>=48){
//code inside of here will run if the child is 48 or taller
    console.log("Congrats you are tall enough to ride the coster!");
} else {
    console.log("Sorry you are too short to ride the coster");
}

console.log("This text is after the code block");
