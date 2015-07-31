
 /*
Hakeem Anderson
Section 00
Final Exam
07-30-15
 */


//alert("Testing to see if this works");

 //Prompting the user for item cost


 var originalCost= prompt("What is the cost of your item?");
  while (isNaN(originalCost) ||originalCost===""){
   originalCost=prompt("Please enter a number value.\n Do not leave blank.");

 }

 var discountPercentage = prompt("Please enter the discount percentage of your item.");
 while (isNaN(discountPercentage) || discountPercentage===""){
  discountPercentage = prompt("Please enter a number value.\nDo not leave blank.");
  if (discountPercentage>100){
   discountPercentage = prompt("Please use a value between 0-100");
  }

 }

 function discountCost(c,d){

  var discount = originalCost*(discountPercentage/100);
  var discountedPrice = originalCost-discount;

  return discountedPrice;

  console.log("The final cost of an item that cost $"+originalCost+"with a discount of"+discountPercentage+"is"+discountedPrice);

 }

 discountCost(originalCost,discount);

 /*
 100
 25
  */