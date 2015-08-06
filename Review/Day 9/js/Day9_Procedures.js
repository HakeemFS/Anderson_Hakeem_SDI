
 /*
Hakeem Anderson
Section 00
07-25-15
Procedures
 */


//alert("Testing to see if this works");

 //This is a normal function
 function calcArea(w,h){
  var area = w*h;
  //Returnes a variable
  return area;

 }

 //Function call to calcArea
 //Catch the return value

 var results1 = calcArea(10,20);

 console.log(results1);

 //This is a procedure

//A list of steps to return nothing
 //Returns NOTHING
 function calcPeri(w,h){
  var peri = 2*w + 2*h;
  console.log(peri)
 }

 //Function call for our procedure
 //Does not catch anthing.
 calcPeri(10,20);