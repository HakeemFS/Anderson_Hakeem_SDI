
 /*
Hakeem Anderson
Section 00
7-25-15
Multi
 */


//alert("Testing to see if this works");

 //Create varible for h & w

 var height = 8;
 var width = 6;

 //create another varible for a base of a triangle
 var base = 5;


 //Function call to area
 var resultsArea = calcArea(height,width);
 console.log(resultsArea);

 //Create a function to calculate the perimiter

 var calcPeri = function(h,w){
  var periTotal = 2*h + 2*w;
  return periTotal;
 };

 //Function call must go under function definintion for annon

 var resultsPeri = calcPeri(height, width);

 console.log(resultsPeri);

 //Create random

 function calcArea(h,w){
  var area = w*h;
  return area;

 }

 //Create functino to cal area
 var triArea = function(b,h){
  var area = .5*b*h;
  return area;

 };

 //Function call to triangle area

 var triAreaTotal = triArea(base,height);
 console.log(triAreaTotal);

 //Create a procedure that will console log the rectangel peri and area

 function printOut(p,a){
  console.log("The perimeter is "+p);
  console.log("The area of the rectangle is "+a);


 }

 //Function call for print outs

 printOut(resultsPeri,resultsArea);












