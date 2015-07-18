
 /*
Hakeem Anderson
Section 00
7-18-2015
Math
 */


//alert("Testing to see if this works");

 //round() - normal rounding .5
 //Does not permanently change the value

 //To change the variable assign it back to the varible name
 num1 = Math.round(num1);

 var num1 = 9.444;
 console.log(num1);
 console.log(Math.round(num1));
 console.log(num1);

 //floor() - rounds to the nearest integer
 var num2 = 6.1;
 console.log(num2);
 console.log(Math.floor(num2));

 //Ceil() - Always rounds up to the nearest integer

 var num3 = 4.2;
 console.log(num3);
 console.log(Math.ceil(num3));

 //Random() - Returns a number between 0 and almost 1

 var num4 = Math.random();
 console.log(num4);

 //Number between 0 and 10

 var num5 = Math.random()*10;

 //Number between two other numbers NOT zero
 //Math.random()*(max-min)+ min

 //Number between 50-80
 var num6 = Math.random()*(50-80)+50;
 console.log(num6);

 //An INTERGER between 100-1000
 var num7 = Math.round(Math.random()*(1000-100)+100);

 //.toFixed(x) - Rounds to a decimal place - x decimal

 var num8 = 12.123456;
 console.log(num8);
 console.log(num8.toFixed(2));

 //Math Constants
 //Pi - 3.14259
 //Math.PI

 //Circumfrence of a circle

 var radius = 7;
 var circleCumfre = 2*radius*Math.PI;
 console.log(circleCumfre);
 
























