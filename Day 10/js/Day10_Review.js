
 /*
Hakeem Anderson
Section 00
7-28-15
Review Functions
 */


//alert("Testing to see if this works");


//Fingure out how much pizza per sq in

 //Figure out how much pizza per slice

 //Propt the user for
 //Radius
 //Cost
 //# of slices

 var pizzaRadius = prompt("We are going to calculate how much pizza cost\n What is the radius of your pizza?");
 //validate
 while(isNaN(pizzaRadius) || pizzaRadius==="") {
  //re prompt
  pizzaRadius = prompt("Please do not leave blank and only use numbers.\nPlease enter your pizza's radius:");
 }
 //Number cast
 pizzaRadius = Number(pizzaRadius);


 var pizzaCost = prompt("What is the cost of your pizza?");
 //validate
 while(isNaN(pizzaCost) || pizzaCost===""){
  //re prompt
  pizzaCost = prompt("Please do not leave blank, and only use numbers.\nPlease enter your pizza's cost:");
 }
 //Number cast
 pizzaCost = Number(pizzaCost);


  var pizzaSlices = prompt("How many slices does your pizza have?");
 //validate
 while(isNaN(pizzaSlices) || pizzaSlices===""){
  //re prompt
  pizzaSlices = prompt("Please do not leave blank and only use numbers.\nHow many slices do your pizza have?");
 }
 //Number cast
 pizzaSlices = Number(pizzaSlices);

 //Create a function that launces all funcitinos
 function masterPizzaFunc(rad,cost,slices){
  //fucntion call area
  var area = pizzaArea(rad);

  //Functino call sq in
  var sqInCost = pizzaSqInCost(cost,area);


  //Function call to slices
  var slicePrice = pricePerSlice(slices, cost);
  return [sqInCost,slicePrice];
 }



//Functino call to master function

 var results = masterPizzaFunc(pizzaRadius, pizzaCost, pizzaSlices);


 //Function Call for area function
 var area = pizzaArea(pizzaRadius);
 //Function call sq function
 var sqInCost = pizzaSqInCost(pizzaCost,area);
 //Function call slices
 var slicePrice = pricePerSlice(pizzaSlices,pizzaCost);

 //Print out results
 console.log("Your pizza cost $"+results[0]+"per sq inch of pizza or $"+results[1]+" per slice. ");



 //Create a function to calc the area of pizza
function pizzaArea(r){
 //Area of circle r*r*PI
 var area = Math.pow(r,2)*Math.PI;
 return area;
}
     //Crate a function that calculates the price per sq inch
 function pizzaSqInCost(price, area){
  //cost per in = price/are
  var costPerIn = price/area;
  //Since this is the coss dollar & cents
  //ROund to 2 decimal places
  costPerIn = costPerIn.toFixed(2);

  return costPerIn;

 }

 //Create a function that calculates cost per slice
 function pricePerSlice(slices, price){
  //Cost per slice = pizza price/ number of slices
  var costPerSlice = price/slices;

  //Round to 2 decimals
  costPerSlice - costPerSlice.toFixed(2);
  return costPerSlice;



 }