// console.log("Hello Class");

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 / 2);
// console.log(2 * 2);
// console.log(10 % 3); // Expect: 1

// declaring variables
// var = The original way to declare variables in JavaScript.
// Function-scoped or globally scoped, meaning that it is available everywhere regardless. unlike ruby where the variables are separate inside and outside a method. Accessible within the function in which it’s declared. If declared outside any function, it becomes globally scoped.
// Can be re-declared and updated.
// Modern JavaScript development rarely uses var due to its quirks and potential for scope-related bugs. However, if you’re working in legacy code or need to support very old browsers, you may still see or use var.
// Example: 
// var count = 10;

// if (count > 5) {
//   var result = "Greater than 5";
// }

// console.log(result);


// let = Block-scoped. works like variables accessibility in ruby. 
// Only accessible within the block (e.g., {}) it’s declared in. This provides better control over variable scope and avoids accidental overwrites.
// Can be updated but not re-declared in the same scope.
// Use let for variables that you anticipate reassigning within a block or scope. It’s particularly useful for loops, conditionals, or situations where the variable’s value needs to change.

// Use let if you expect the variable to change.
// let score = 0;

// if (true) {
//   let score = 100;
//   console.log(score);
// }

// const = Block-scoped.Cannot be updated or re-declared.
// Must be initialized at the time of declaration.
// Use const for variables whose values should not change after they are initialized. It’s great for configuration values, fixed data, or when you want to indicate that a value should remain constant throughout the program.
// const is generally preferred over let for any variable you don’t plan to reassign, as it can make code more predictable and easier to read.

// Use const if you dont plan on changing the variable

// const test = 10;

// console.log(test);

// const user = { name: "Alanna", age: 23 };

// console.log(user);

// user.age = 25;
// user.age = 26;

// user.name = "Jessie"
// user.name = "Elijah"
// console.log(user);

// with const = if in an hash, you can "mutate" the data as long as you dont change the structure of the data

//Practice:
// var length = 5;
// length = 30;
// length = 2;

// if (length > 10) {
//   var result = "Length is wayyyy to long!";
// } else {
//   var result = "The length is good!";
// }

// console.log(result)

//------------------------------------------------------------------------------
// Data types:

// let count = 10;
// let price = 19.99;

// console.log(typeof(count));
// console.log(typeof(price));

// //NaN - Not a Number, example: infinity, itll say NaN

// let message = "Hello Class";

// console.log(typeof message); // this is the same as above, you can type it either way
// //Ruby uses snake case for spaces, Java uses Camou case. first letter lowercase, other letters are capitalized
// let isLoggedIn = true;

// let hasAccess = false;

// console.log(typeof(isLoggedIn));
// console.log(typeof(hasAccess));

// let data = null; // same as nil

// console.log(typeof(data));

// // undefined 

// let something;

// console.log(typeof something);

// const id = Symbol('id');
// console.log( typeof id);

//--------------------------------------------------------------------------------

// Array
// let numbers = [1, 2, 3, 4, 5];
// numbers[2] = 10

// console.log(numbers);

// // Object (technically a ruby hash) (In python its called a dictionary)

// let person = {
//   name: "Alanna",
//   age: 23
// };

// console.log(person.name);

//--------------------------------------------------------------------------------
// Operators: an additional
// let exponent = 10 ** 2;
// console.log(exponent)

// let x = 10;

// x += 5;
// // x = 10 + 5; // same as above

// console.log(x)

// comparison operations
// == "Loose equality" - allows type coercion
// === "Strict equality" - no type coercion

// console.log(5 == '5'); //return true
// console.log(5 === '5'); //return false

// // !=
// // !==
// // These are the opposite of above

// console.log(5 != '5'); //return false
// console.log(5 !== '5'); //return true

// console.log(5 > 1);
// console.log(5 > 10);
// console.log(5 <= 10);

// && if both are true
// || if one are true (or)
// ! inverts the operand
// let a = true;
// let b = false;
 
// console.log(a && b);
// console.log(a || b);
// console.log(!a)

// let something;

// console.log(true && (something = 10)); // this will say undefined bc it's running in true first, itll never get to redefine the something.

//--------------------------------------------------------------------------------
//functions- same as in Ruby, grouping of logic over and over many times.

// function greet(name) { //everything within this bracket is referred to a block.
//   console.log("In the function!!");
//   return "Hello " + name + "!";
// }
// console.log(greet("Alanna"));

// //assigning a variable in a function

// let something = function greet(name) {
//   console.log("In the function!!");
//   return "Hello " + name + "!";
// }

// console.log(something("Alanna"));


// Exercise:
// function greet(name) {
//   return "Hello " + name + ". I hope you have a great day!";
// }
// console.log(greet("Alanna"));

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(3, 5)); // This gives correct: 8
// //---------------------------------
// function sum(a, b) {
//   return "Sum: " + a + b;
// }

// console.log(sum(3, 5)); //This gives Sum: 35

// function sum(a, b) {
//   return "Sum = " + (a + b);
// }

// console.log(sum(3, 5)); // Now this gives the correct: Sum = 8

// parameters
// arguments
// These two are different. Things to note.
// parameter is the variable name in the function
// argument is what we pass in when we call the function. Alanna for example
// Also note that you have to explicitly put return for javascript

// original syntax
// function greet(name) {
//   return "Hello " + name + "!";
// }
  

// arrow functions
// const greet = (name) => {
//   return "Hello " + name + "!";
// }

// The two are the same

// const greet = (name) => "Hello " + name + "!"; //one-liner

// console.log(greet("Alanna"));

// const add = (a, b) => a + b;

// console.log(add(2, 2));

// Exersize: Rewrite functions from previous exercise
// const greet = (name) => {
//   return "Hello " + name + ". I hope you have a great day!";
// }

// const greet = (name) => "Hello " + name + ". I hope you have a great day!";

// console.log(greet("Alanna"));

// const sum = (a, b) => {
//   return "Sum = " + (a + b);
// }

// const sum = (a, b) => "Sum = " + (a + b);
// console.log(sum(3, 5));

//--------------------------------------------------------------------------------
//scopes
//global scop = available everywhere
//deals with variables declared outside of any function or block
//available pretty much everywhere
// often risky if overused, bc global variables can be modified anywhere which can lead to naming collisions or unexpected behavior

// var globalVariable = "I am a global variable";

// function showGlobal() {
//   console.log(globalVariable);
//   return "This is a return test"
// }

// console.log(showGlobal());


// // function scope = variables declared with var inside of a function
// // only variable within that specific function -  cannot be accessed outside of the function
// // great for encapsulating logic and avoiding naming collisions

// function testScope() {
//   var functionVar = "I am inside the function";
//   console.log(functionVar);
// }
// testScope();

// console.log(functionVar);


// // block scope = variables declared with let or const inside of a block ({}) only available within that specific block 
// // can be if, loops, or any code wrapped in a {}

// if (true) {
//   let blockVar = 'I am block scoped';
//   const blockConst = 10;
//   console.log(blockVar);
//   console.log(blockConst);
// }

// console.log(blockVar);
// console.log(blockConst);

//--------------------------------------------------------------------------------

// hoisting=  specific to vars and functions. for let and const you have to define it before you call it.
// console.log(x);

// var x = 5;

// console.log(x);

// x = 5;

// let x;
// console.log(x);

// x = 0;

// console.log(greet("Alanna"));

// function greet(name) {
//   return `Hello ${name}`; // interpolation uses the one below the tilda (~) and with the dollar sign.
// }

// console.log("Step 1");

// setTimeout(() => {
//   console.log("Step 2");
// }, 2000);

// console.log("Step 3");

// this displays the difference in how the code runs in ruby vs javascript. for ruby this function would be using sleep and it delays step two for a little and then after step two runs, then the step three will go. 
// for javascript it will all run at the same time. step 1, and 3 will run and then a little delay and then after it will run step 2. so you have to be careful bc your code wont necessarily run in order unless you specifically make it do so.
// var globalVariable = "This is a test.";

// function showGlobalTest() {
//   console.log(globalVariable);
// }

// showGlobalTest();v //bc there is no return. console.log works when there is something being returned