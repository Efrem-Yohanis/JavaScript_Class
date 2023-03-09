// // Review on compartion operation 
// // ==	equal to
// // ===	equal value and equal type
// // !=	not equal
// // !==	not equal value or not equal type
// // >	greater than
// // <	less than
// // >=	greater than or equal to
// // <=	less than or equal to

// // Example: the resulet true or false
// // --------------------- == --------------------
console.log(42 == 42)   // true
console.log(42 == '42')  //true
console.log(40 == 42)    //false
console.log('hello' == 'hello') // true

// // --------------------- === --------------------
console.log(42 === 42)   // true
console.log(42 === '42')  //false
console.log('hello' === 'hello') // true

// // --------------------- != -------------------
console.log(42 != 42)   // false
console.log(42 != '42')  //false
console.log('dog' != 'cat') // true

// // ------------------- !== -------------------
console.log(42 !== 42)   // false
console.log(42 !== '42')  //false
console.log('dog' !== 'cat') // true

// -------------------  ------------------------
console.log(42 > 42)   
console.log(42 < 42)   
console.log(42 >= 42)   
console.log(42 <= 42) 
console.log('dog' !== 'cat') // true
// // Review on logical operation 

console.log(True && True)	//True
colsole.log(True && False)	//False
colsoe.log(False && True)	//False
console.log(False && False) //False

console.log(True || True)	//True
colsole.log(True || False)	//False
colsoe.log(False || True)	//False
console.log(False || False) //False


// // The if Statement
// //Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

let name = 'Debora'

if (name == 'Debora')
{
    console.log('Hi, Debora');
}
 
if (name != 'George')
{
    console.log('You are not George')
}

let age = 18;
if (age >= 18) {
  console.log('You can sign up');
}

// // The if,else Statement

var mySal = 500;
var yourSal = 1000;
if( mySal > yourSal)
{
    console.log("My Salary is greater than your salary");
}
else
{
    console.log("My Salary is less than or equal to your salary");
}

// The if else...if  Statement
let month = 6;
let monthName;

if (month == 1)
 {
  monthName = 'Jan';
} 
else if (month == 2) 
{
  monthName = 'Feb';
} 
else if (month == 3) 
{
  monthName = 'Mar';
} 
else if (month == 4)
 {
  monthName = 'Apr';
} 
else if (month == 5)
 {
  monthName = 'May';
}
 else if (month == 6)
 {
  monthName = 'Jun';
}
 else if (month == 7) 
{
  monthName = 'Jul';
} 
else if (month == 8)
 {
  monthName = 'Aug';
} 
else if (month == 9)
 {
  monthName = 'Sep';
} 
else if (month == 10)
 {
  monthName = 'Oct';
} 
else if (month == 11)
 {
  monthName = 'Nov';
} 
else if (month == 12) 
{
  monthName = 'Dec';
} 
else 
{
  monthName = 'Invalid month';
}
console.log(monthName);


// switch case

let day = 3;
let dayName;

switch (day) 
{
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName);
// Project 
// write code to calculet astudent grade

let Mark = 6;
let Grade;

if (Mark >= 90)
 {
    Grade = 'A';
} 
else if (Mark >= 80) 
{
    Grade = 'B';
} 
else if (Mark == 70) 
{
    Grade = 'C';
} 
else{
    Grade = 'F';
}
console.log('Grade' + ' ' + Grade)