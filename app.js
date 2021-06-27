//************************* */ Chapter 26 to 30*********************

// 1. Write a program that takes a positive integer from user & display the following in your browser.
//  a. number b. round off value of the number c. floor value of the number d. ceil value of the number
//  var input = +prompt("Enter Positive Integer");
//  var round = Math.round(input);
//  var floor = Math.floor(input);
//  var ceil = Math.ceil(input);


// if (input > 0){
//     document.write( "<br >"+"your number is    :" + input);
//     document.write( "<br >"+ "The Round number is    :" + round + "<br />");
//     document.write("The floor number is     : " + floor + "<br />");
//     document.write("The Ceil number is      : " + ceil + "<br />");
    
// }
// else{
//     document.write("Please enter valid numbers");
// }

// 2. Write a program that takes a negative floating point number from user & display the following in your browser. 
// a. number b. round off value of the number c. floor value of the number d. ceil value of the number

// var input = +prompt("Enter Negative floating Point");
//  var round = Math.round(input);
//  var floor = Math.floor(input);
//  var ceil = Math.ceil(input);


// if (input < 0){
//     document.write( "<br >"+"your number is    : " + input);
//     document.write( "<br >"+ "The Round number is    : " + round + "<br />");
//     document.write("The floor number is     : " + floor + "<br />");
//     document.write("The Ceil number is      : " + ceil + "<br />");
    
// }
// else{
//     document.write("Please enter valid numbers");
// }

// 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var input = +prompt("Enter a value");
// var abs = Math.abs(input);
// document.write("your  number is    : " + input + "<br />");
// document.write("your  absolute number is    : " + abs);

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:


//  var bigDecimal = Math.random();
//  var improvedNum = (bigDecimal * 6);
//  var numberOfStars = Math.floor(improvedNum);

//  document.write( "Your dice number is " + numberOfStars);
  
// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser


//  var bigDecimal = Math.random();
//  var improvedNum = (bigDecimal * 2);
//  var numberOfStars = Math.floor(improvedNum);
// if (numberOfStars === improvedNum){
//  document.write( "Your coin is Head      " + numberOfStars);
// }
// else{
//     document.write( "Your coin is Tail    " + numberOfStars);
// }

// 6. Write a program that shows a random number between 1 and 100 in your browser.

// var bigDecimal = Math.random();
//  var improvedNum = (bigDecimal * 100);
//  var numberOfStars = Math.floor(improvedNum);

//  document.write( "Your random number between 1 to 100 is   " + numberOfStars);

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
//  Possible user inputs can be:
//  a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms
  
// var weight = prompt("enter your weight in kilograms");
// document.write("your weight is  " + weight);

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user.
//  var secret_number = +prompt("Enter your secret number from 1 to 10");
//  var number = Math.random();
//  var secret = +prompt("Please Enter a Value 1 to 10");
//  var random = parseInt(number * 10);

//  if(random === 1){
//      document.write("Wow! you choose no 1");
//  }
//  else if(random === 2){
//     document.write("Wow! you choose no 2");
//  }
//  else if (random === 3){
//     document.write("Wow! you choose no 3");
//  }
//  else if (random === 4){
//     document.write("Wow! you choose no 4");
//  }
//  else if (random === 5){
//     document.write("Wow! you choose no 5");
//  }
//  else if (random === 6){
//     document.write("Wow! you choose no 6");
//  }
//  else if (random === 7){
//     document.write("Wow! you choose no 7");
//  }
//  else if (random === 8){
//     document.write("Wow! you choose no 8");
//  }
//  else if (random === 9){
//     document.write("Wow! you choose no 9");
//  }
//  else {
//     document.write("Try again! Better Luck next time");

//  }

//************************* */ Chapter 31 to 34 ******************************

// 1. Write a program that displays current date and time in your browser.
// var date = new Date();
// document.write(date);

// 2. Write a program that alerts the current month in words.
// // For example December.
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var day = date.getMonth();
// var thisdate = month[day];
// document.write("current month is " + thisdate);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

// var week = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var date = new Date();
// var day = date.getDay();
// var thisdate = week[day];
// var first_three_letter = (thisdate.substring(0,3)); 

// document.write("current day is " + first_three_letter);

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

//  var week = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
//  var date = new Date();
// var day = date.getDay();
// var thisdate = week[day];

// if(thisdate ==="saturday" || thisdate === "sunday"){
//     document.write(thisdate + " It's fun Day ");

// }

// else{
//     document.write(thisdate + "It's working Day");
// }

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = new Date();
// var current = date.getDate();
// document.write("Current Date : " + date + "<br />");
// if(current === 15){
//     document.write("First Fifteen Days Of month : " + current + "<br />");
// }
// else{
//     document.write("Last Fifteen Days Of month : " + current + "  is Today <br />");
// }

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date = new Date();
//  var current = date.getTime();
//  var minute = current/(1000*3600);
//  document.write("Current Date : " + date + "<br />");
//  document.write("Elapsed milisecond is   " + current + "<br />");
//  document.write("Elapsed minute is   " + minute + "<br />");


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// var date = new Date();
// var time = date.getHours();

// document.write("Time is " + time);

// if(time < 12){
//     document.write("it's A.M");
// }
// else{
//     document.write("it's P.M");

// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// var date = new Date("31 dec 2020");
// alert(date);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// var date = new Date();
// var newdate = new Date("18 june 2015");
// var  current = date - newdate;
// var a = Math.round(current/(1000*60*60*24));
// alert( a + "days have passed since 1st Ramadan 2015");


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var date = new Date();
// var newdate = new Date("18 june 2015");
// var  current = date - newdate;
// var a = Math.floor(current/(1000));
// alert( a + "second have passed since  2015");

// task11
// var date1 = new Date();
// var date2 = new Date();
// date2.sethours(1);
// document.write("current date is "+ date1 + "1 hour ago it was " + date2);

// task 12

// var date1 = new Date();
// var date2 = new Date();
// date2.setFullYear(1921);
// document.write("current year is "+ date1 + "100 year back  " + date2);


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var userBirth = prompt("Enter your birth date");
// var user_input = new Date(userBirth);
// var today = new Date();
// var a = today.getTime();
// var c = today - user_input;
// var age = Math.ceil(c/(1000*60*60*24*30*12));
// alert("user age is " + age);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var Customer =prompt("enter a name");
// document.write("your Name is " + customer);

// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var day = date.getMonth();
// var thisdate = month[day];
// document.write("current month is " + thisdate);

// var numberOfUnit = 234;
// var chargesperunit = 10;
// var net_amount = numberOfUnit * chargesperunit;
// var latePayment = 200;
// var grossamount =  net_amount + latePayment;

// document.write("Number Of Unit " + numberOfUnit);
// document.write("Net Amount " + net_amount);
// document.write("LatePayment " + latePayment);
// document.write("grossamount" + grossamount);
