
// var myName = "Anurag";
// var _myAge = 22;
// console.log(myName)
// console.log(3*6)
// console.log(_myAge)

// var _myName = "Anurag";
// var myName = "Anurag";
// var Coder = true;
// var myAge = 22;
// console.log(myName)
// console.log(Coder)
// console.log("The type of "+myName+" is "+typeof(myName))
// console.log("The type of "+myAge+" is "+typeof(myAge))
// console.log("The type of "+Coder+" is "+typeof(Coder))
// if(Coder){
//   console.log(myName+" is Coder.")
// }

// console.log(10 + "20")
// console.log(9 - "5")
// console.log("Java" + "Script")
// console.log(" " + " ")
// console.log(" " + 0)
// console.log("vinod" - "thapa")
// console.log(true + true)
// console.log(true + false)
// console.log(false + false)
// console.log(false - true)

// Interview Question1 - Difference between null vs undefined

// var colonyOnMars = null;
// console.log(colonyOnMars)

// var colonyOnVenus;
// console.log(colonyOnVenus)

// var myPhoneNumber = 9383838388;
// var myName = "Anurag"

// console.log(isNaN(myPhoneNumber));

// console.log(isNaN(myName));

// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(Number.isNaN(NaN));

// console.log(5 + 20);

// Expressions and Operators

// var x = 5;
// var y = 5;

// console.log("Is bot the x and y are equal or not : ", x == y);


// Prefix increment operator means the variable is incremented first and then the expression is evaluated using the new value of the variable.

// Postfix increment operator means the expression is evaluated first using the original value of the variable and then the variable is incremented(increased).
// var num = 15;

// var newNum = --num + 5;

// console.log(num);
// console.log(newNum);

// Comparison Operator
// A comparison operator compares its operands and returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = -20;

// console.log(a == b);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);

// LOGICAL Operators

// console.log(a == b || b > a || b > 0);
// console.log(!((a>0) || (b>0)));

// console.log(2**3);
// console.log(3 + " string");

// program to swap to two numbers
// var a = 1;
// var b = 2;

// using third variable
// var c;

// c = a;
// a = b;
// b = c;

// without using third variable
// a = a+b
// b = a-b
// a = a-b

// console.log("a & b =", a , b);

// Interview Questions - Difference between == vs ===
// == checks only values
// === checks values and datatype also
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2);
// console.log(num1 === num2);

// CONTROL STATEMENTS AND LOOPS
// IF-Else statment- Executes if-statement block if it is true otherwise by default executes else-statement.

// var tomr = "sunny";

// if(tomr == "rain"){
//   console.log('take raincoat');
// }else{
//   console.log("do not take raincoat");
// }

// LEAP-YEAR Program
var Year = 2000;

// if(Year%4 === 0){
//   if(Year%100 === 0){
//     if(Year%400 === 0){
//       console.log(Year," is a leap year.");
//     }else{
//       console.log(Year," is not a leap year.");
//     }
//   }else{
//     console.log(Year," is a leap year.");
//   }
// }else{
//   console.log(Year," is not a leap year.");
// }

// we have total 5 falsy values in javascript 0,"",undefined,null,Nan,false** is false

// var score = 0;

// if(score === 0){
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log(("Yay, we won the game 😀"));
// }

// TERNARY OPERATOR

// The conditional (ternary) operator is the only Javascirpt operator that take three operands

// var age = 18;
// var country = "India"
// age,country = ((age >= 18) && (country === "India"))?console.log("You are eligible to vote."):console.log("You are not eligible to vote.");


// SWITCH STATEMENT
// Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

// 1st without break statement
// Find the Area?

// var area = "rectangle";
// var PI = 3.142,l = 5,b = 4,r = 3;

// switch (area) {
//   case "circle":
//     console.log("Area of circle is ",PI * r**2);
//     break;
//   case "triangle":
//     console.log("Area of triangle is ",(l*b)/2);
//     break;
//   case "rectangle":
//     console.log("Area of rectangle is ",(l*b));
//     break;
//   default:
//     console.log("Plese enter valid data.");
// }

// WHILE LOOP STATEMENT
// The hwile statement creates a loop that executes a specified statement as ong s the test condition evaluates to true.

// var x = 0;
// while(x <= 100000000000000){
//   console.log(x);
//   x++;
// }

// DO WHILE LOOP STATEMENT
// var x = 0;
// do {
//   debugger;
//   console.log(x);
//   x++;
// } while (x <= 10);

// FOR LOOP
// var tableOf = 9;
// for(var num = 1; num <= 10; num++){
//   console.log(tableOf,"x",num,"=",tableOf * num);
// }

// FUNCTIONS IN JAVASCRIPT
// A Javascript function is a block of code designed to perform particular task.
// Function is a group of reusable code which reduces redundancy and also follows 
// DRY - Do Not Repeat Yourself

// function addNumbers(a,b) {
//   console.log(a+b);
// };
// addNumbers();
// addNumbers(75,25);
// addNumbers(50,50);

// Question - Difference between function parameter and function arguments

// Function expressions

// function addNumbers(a,b) {
//   return a+b;
// };
// var total = addNumbers(20,20);
// console.log(total);

// Anonymous Function 
// A function expression is similar to and has the same syntax as a function declaration One can define "named" function expressions (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions.

// var funExp = function(a,b){
//   return total = a+b;
// }

// var sum = funExp(5,25);

// console.log(sum);

// Difference between let vs const vs var

// var myName = "Anurag";
// console.log(myName);

// myName = "Anurag Mahadik";
// console.log(myName);

// let myName = "Anurag";
// console.log(myName);

// myName = "Anurag Mahadik";
// console.log(myName);

// const myName = "Anurag";
// console.log(myName);

// myName = "Anurag Mahadik";
// console.log(myName);

// function bioData(){
//   var myfirstName = "Anurag";
//   console.log(myfirstName);

//   if(true){
//     var myLastName = "Mahadik";
//     console.log('inner', myLastName);
//     console.log('inner', myfirstName);
//   }

//   console.log('innerOuter', myLastName);
// }

// console.log(myfirstName);

// bioData();


// Template literals (Template Strings)

// for(let num = 1; num <= 10; num++){
//   let tableOf = 12;
//   console.log(`${tableOf}x${num}=${tableOf*num}`);
// }

// var a = 10, b = 20;

// const sum = () => `The sum of the two number is ${(a)+(b)}`;

// console.log(sum());


// Default Parameters

// ARRAYS IN JAVASCRIPT
// When we use var, we can store only one value at a time.
// When we feel like storing multiple values in one variable then instead of var, we will use an Array.
// In Javascirpt, we habe an Array class, and arrays are the prototype of this class.

// var ArrayList = ['Pradeep','Vinay','Sandeep'];

// My Solution
// for(let x in ArrayList){
//   console.log(ArrayList[x]);
//   console.log();
//   for(let a in ArrayList[x]){
//     console.log(ArrayList[x][a]);
//   }
//   console.log();
//   console.log(ArrayList[x].length);
//   console.log();
// }

// Thapa's solution
// for(let x of ArrayList){
//   console.log(x);
//   console.log();
//   for(let a of x){
//     console.log(a);
//   }
//   console.log();
// }

// FOREACH LOOP
// You cannot use break in foreach loop
// ArrayList.forEach(function(element, index, array){
//   console.log(element);
//   console.log('index',index);
//   console.log('array',array);
// });

// ArrayList.forEach(x => {
//   console.log(x);
// });

// Searching and filter in an array.
// Array.prototype.indexOf("element", index) - Starts searching from forward of defined index.

// Returns the first (least) index of an element within the array equal to an element, or -1 if none is found. It search the element fromt he  0th index number.

// var myFriendsName = ['anurag','pradeep','sahil','vinay','rakesh'];

// console.log(myFriendsName.indexOf("sahil",2));

// Array.prototype.lastIndexOf("element", index) - Starts searching from backward of defined index.

// console.log(myFriendsName.lastIndexOf("vinay", 4));

// Array.prototype.includes("element", index) - Checks if the element is included searching forward from index.

// var isIncluded = myFriendsName.includes("sahil", 2);

// var isIncluded1 = myFriendsName.includes("roshan", 3);

// console.log(isIncluded);
// console.log(isIncluded1);

// var myFriendsName = ['anurag','pradeep','sahil','vinay','rakesh'];

// Array.prototype.find()
// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found. Only problem is that it return only one element.


// Array.prototype.find(element);

// const prices = [200,300,350,400,450,500,600];

// // condition - price < 400

// const findElem = prices.find((currVal) => currVal < 400);

// console.log(findElem);

// Array.prototype.findIndex();
// Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.

// const prices = [200,300,350,400,450,500,600];

// console.log(prices.findIndex((currVal) => currVal > 1400));

// Array.prototype.filter();.
// Returns a new array containing all elements of the calling array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// const newPrices = prices.filter((elem, index) => {
//   return elem > 1400;
// })

// console.log(newPrices);


// Array.prototype.sort();
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// const Months = ['March', 'Jan', 'Feb', 'Dec', 'Nov', 'April'];

// console.log(Months.sort());

// const array1 = [1200000,1, 23, 17, 34, 0];

// console.log(array1.sort());

// Array.prototype.push()
// The push() method adds one or more elements ot the end of a n array and returns the new length of the array.

// const animals = ['pigs','goats','sheep'];

// var returnsfrompush = animals.push('chicken','cow','crocs');

// console.log(animals);
// console.log(returnsfrompush);

// Array.prototype.unshift()
// The unshift() mehtod adds one or moe elements to the beginning of an array and returns the new length of the array.

// const animals = ['pigs','goats','sheep'];

// const count = animals.unshift('chicken','cow','crocs')

// // console.log(animals);
// // console.log(count);

// const myNumbers = [1,2,3,5];

// console.log(myNumbers.unshift(4,6));


// Array.prototype.pop()
// The pop() method remvoes the last element from an array and returns that element. This method changes the length of the array.

// const plants = ['brocolli','cauliflower','kale','tomato','cabbage'];

// console.log(plants.length);
// console.log(plants.pop());
// console.log(plants.length);


// Array.prototype.shift()
// The shfit() method removes the firstelement from an array and returns that removed element. This method changes the length of the array.

// const plants = ['brocolli','cauliflower','kale','tomato','cabbage'];

// console.log(plants);
// console.log(plants.shift());
// console.log(plants);


// Challenge Time
// Array.prototype.splice()


// const months = ['Jan', 'march', 'April', 'June', 'July'];

// sol1:
// Adding Dec at end of array
// const newMonths = months.splice(months.length,0,'Dec')
// console.log(months);

// sol2:
// What is return value of splice method
// console.log(newMonths);

// sol3:
// Update march to March
// console.log(months);
// months.splice(1,1,'March');
// console.log(months);

// sol4:
// Delete June from an array
// const deletedElement = months.splice(months.indexOf('April'),Infinity)
// console.log(months);
// console.log(deletedElement);

// Challenge Time
// Find the square root of each element in an array?
// My Soln:
// let arr = [25,36,49,64,81,9801,1444,4761]

// for(x of arr){
//   for(let y = 1;y<=10000;y++){
//     if(y*y == x){
//       console.log(`Square root of ${x}=${y}`);
//     }
//   }
// }

// Array.prototype.map()
// let newArray = arr.map(callback(currentValue[, index[, array]]){
// Returns element for newArray, aftr executing something
// }[, thisArg]);

// Returns a new array containing the results of calling a function on every element in this array.

// const array1 = [1,4,9,16,25];

// Condition: num > 9

// let newArr = array1.map((curElement, index, arr) =>{
//   return curElement > 9
// })

// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((curElm, index, arr) => {
//   return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
// })

// console.log(newArr);

// Sol1:
// Find the square root of each element in an array.

// const array1 = [25,16,49,64,81];

// let squareroot = array1.map((curElem) => Math.sqrt(curElem))

// console.log(squareroot);

// Sol2:
// Multiple each element by  2 and return only those elements which are greater than 10?

// let arr = [2,3,4,6,8]

// let multipliedbytwo = arr.map((curElem) => curElem*2).filter((curElem) => curElem > 10).reduce((sum, curElement) => sum += curElement)

// console.log(multipliedbytwo);


// Array.prototype.reduce()
// Flatten an array means to convert the 3d or 2d array into a single dimensional array

// The reduce() mehtod exeutes a reducer function (that you provide on each element of the array, resulting in single output value.)
// The reducer funciton takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator,curElem, index, arr) => {
//   return accumulator += curElem;
// },7)

// console.log(sum);

// How to flatten ana rray converting 2d and 3d array into one dimensional array

// const arr = [
//   ['zone_1', 'zone_2'],
//   ['zone_3', 'zone_4'],
//   ['zone_5', 'zone_6'],
//   ['zone_7', 'zone_8']
// ];

// let flatArr = arr.reduce((accum, currVal) => {
//   return accum.concat(currVal);
// })

// console.log(flatArr);


// STRINGS IN JAVASCIRPT
// A JavaScript string is zero or more characters written inside quotes.
// JavaScript strings are used for stroring and manipulating text. You can use single or double quotes.
// Strings can be created as primitives, from string literals, or as objects, using the String() constructor.

// let myName = 'Anurag Mahadik';
// let myChannelName = 'Anurag Technical';

// let ytName = new String('Anurag Technical');

// console.log(myName);
// console.log(ytName);

// console.log(myName.length);


// Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex])

// The indexOf() method returns the index of  (the position of) the first occurence of a specified text in a string.

// const myBioData = 'I am the Anurag Technical';
// console.log(myBioData.indexOf('a',8));

// String.prototype.lastIndexOf(searchValue [, fromIndex])
// Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

// const myBioData = 'I am the Anurag Technical';
// console.log(myBioData.lastIndexOf('a'));


// Searching for a String in a String
// String.prototype.search(regexp)
// The search() method searches a string for a specified value and returns the position of the match.
// const myBioData = 'I am the Anurag Technical'

// let sData = myBioData.search('Anurag');

// console.log(sData);


// Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method
// slice() extracts a part of a string and returns the extracted part in a new string.

// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

// The method takes 2 parameters: the start position, and the end position (end not included).

// var str = 'Apple, Banana, Kiwi';

// let res = str.slice(0,5);
// let res = str.slice(7, -2);

// console.log(res);

// Challenge TIme :-
// DIsplay only 280 characters of a string like the one used in Twitter

// let charList = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

// myTweet = charList.slice(0,281);

// console.log(myTweet);

// for(i of myTweet){
//   console.log(i);
// }

// Challenge Time :-
// Return the Unicode of the last character in a string

// let myName = 'Anurag';

// let UnicodelastCharacter = myName.charCodeAt(myName.length - 1);

// console.log(UnicodelastCharacter);

// console.log(String(UnicodelastCharacter));

// The substring() method
// If we give negative value than characters are count from index 0.
// substring() is similar to SecurityPolicyViolationEvent()
// The difference is that substring() cannot accept negative indexes.


// var str = 'Apple, Banana, Kiwi';

// let res = str.substring(0,9);

// console.log(res);



// The substr() method
// substr() is similar to slice()

// The difference is that the second parameter specifies the length of the extracted part.

// var str = 'Apple, Banana, Kiwi';
// // let res = str.substr(0, -2);
// let res = str.substr(-10);

// console.log(res);

// Replacing String Content()

// String.prototype.replace(searchFor, replaceWith);

// The replace() method replaces a specified value with another value in a string.

// let myBioData = 'I am Anurag Mahadik';

// let replaceData = myBioData.replace('Anurag','Anu');

// console.log(replaceData);
// console.log(myBioData);


// Extracting String Characters

// Tehre are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// The charAt() Method
// The charCodeAt() method retuns the character at a specified idnex ( position) in a string.

// let string1 = 'Anurag Mahadik';

// console.log(string1.charAt(5));
// console.log(string1.charCodeAt(5));


// Challenge Time: Return the Unicode of the last character in a string.

// let string1 = 'Anurag Mahadik';


// let lastChar = string1.length -1;

// console.log(string1.charCodeAt(lastChar));



// Other Useful Methods

// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = 'Hello World';
// console.log(str[0]);

// let fName = 'Vinod';
// let lName = 'Thapa';

// console.log(fName + lName);
// console.log(fName, lName);
// console.log(fName.concat(lName));
// console.log(fName.concat(" ",lName));
// console.log(`${fName} ${lName}`);



// String.trim()
// The trim() mehtod removes the whitespace from both start and end.


// let str = "             Hello World!";

// console.log(str.trim());


// Converting String to an Array
// A string can be converted to an array with the split() method.

// var txt = "a,b,|, ,c,d,e";

// console.log(txt.split(",")); //Split on commas

// console.log(txt.split(" ")); //Split on spaces

// console.log(txt.split("|")); //Split on pipe


// DATE & TIME IN JAVASCRIPT

// Creating Date Objects
// There are 4 ways to create a new date object:

// new Date();
// new Date(year, month, day, hours, minutes, seconds, milliseconds);


// let currDate = new Date();
// console.log(currDate.toLocaleString());

// Date.now()
// Returns the numeric value corresponding to the current time-the numebr fo mililseconds elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());

// var d = new Date(2021,0);
// console.log(d.toLocaleString());

// var d = new Date("October 13, 2014 11:13:00");
// console.log(d.toLocaleString());

// var d = new Date(0);
// console.log(d.toLocaleString());

// var d = Date.now();
// console.log(d);

// var d = new Date();
// console.log(d.toLocaleString());
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// let curTime = new Date();
// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

// console.log(curTime);

// ChallengeTime




// MATH OBJECT JAVASCRIPT

// Math object allows to perform mathematical operations on numbers


// console.log(Math.PI);
// console.log(Math.round(Math.PI));
// console.log(Math.sqrt(144));

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.45));
// console.log(Math.abs(4-6));

// console.log(Math.ceil(4.51));
// console.log(Math.floor(17.46));

// console.log(Math.min(9,-22,82,3838,383,-22));

// console.log(Math.max(9,-22,82,3838,383,-22));

// let ScoreCard = [23,39,47,18,40,82];

// console.log(Math.max(23,39,47,18,40,82));

// console.log(ScoreCard);

// let HScore = Math.max(ScoreCard);





// console.log(HighestScore);

// console.log(Math.max(23,39,47,18,40,82));

// console.log(Math.min(23,39,47,18,40,82));

// console.log(ScoreCard);
// console.log(ScoreCard);

// Math.random()

// console.log(Math.floor(Math.random()*10));


// Math.trunc()
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(-999.393));

