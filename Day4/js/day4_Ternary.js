
 /*
Hakeem Anderson
Section 00
7-14-2015
Ternary
 */


//alert("Testing to see if this works");

 //See if your GPA is high enough to graduate
 var gpa =3.9;

 //if your gpa is over 2.0 you can graduate

 if(gpa>2){
  console.log("You can graduate!");
 } else{
  console.log("Sorry your gpa is too low");
 }

 //Convert this to ternary
 //(Condition to test)? true code : false code;
 (gpa>2)? console.log("GPA is great"):console.log("GPA is too low");

 //Test kids age vs what book they should read
 //if the kid is under 10 they can read Green eggs and Ham, otherwise they read the time machine.

 var age = 12;
 var book;

 book = (age>10)? "The Time Machine" : "Green eggs and Ham";
 var book2 = (age<=10)? "Green eggs and Ham" : "The Time Machine"
 console.log("Your kid should read "+book);
 console.log(book2);