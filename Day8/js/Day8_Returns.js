
 /*
Hakeem Anderson
Section 00
7-23-15
Returns
 */


//alert("Testing to see if this works");

 //Lets create a function, area of a rectangle


 function calcArea(w,h){
  //calculate the are
  var area = w*h;

  //console
  console.log("The area is "+area);


  //In order to use results in main code use return "Whatever you wnat to return.
  return area;


 }

 //Call the funciton
 //Catch the retuned value in function
 var results = calcArea(10,30);

 //Access the aree in main code
 console.log(results);


 //Calculate w 40 h 60
 var results2 = calcArea(40,60);
 console.log(results2);

 //What is the total area of both rectangles
 var total = results + results2;
 console.log("The combined area of both is "+total);

