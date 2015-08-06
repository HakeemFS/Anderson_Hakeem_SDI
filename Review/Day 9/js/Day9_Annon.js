
 /*
Hakeem Anderson
Section 00
7-25-15
Annon
 */


//alert("Testing to see if this works");

 //Basic Annonymous fuction
 //var functionName = function(){};
 //Extreamly popular in JS & JQuery
 //Important in object oriented programming
 //For now, it is matter style choice between anon and regular

 //WILL NOT WORK!!!
 //Test function call
 //var results2 = triArea(5,10);
 //console.log(results2);



 //Create an anon funciton to calculate the area of a triangle

 var triArea = function(b,h){
  var area = 5*b*h;
  return area;




 };

 //Function call for a non funciton

 var results = triArea(10,20);

 console.log(results);
