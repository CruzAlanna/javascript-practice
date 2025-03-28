// const age = 10;

// if (age >= 18) {
//   console.log("You are old enough to vote.");
// } else if (age == 18) {
//   console.log("You are just old enough to vote.");
// } else { 
//   console.log("You are not old enough to vote.");
// }


// const isMember = false;
// if (!isMember) { // ! changed it to true
//   console.log("Welcome, member!");
// } else {
//   console.log("Access denied. Please sign up.");
// }

// const day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the work week!");
//     break;
//   case "Tuesday":
//     console.log("It's only Tuesday...");
//     break;
//   default:
//     console.log("Enjoy your day!");
// }


// ternary operator 
// condition ? if it's true : if it's false 

// const age = 19;

// const canDrive = (age >= 16) ? "Yes" : "No";

// console.log(canDrive);

// Exercises:

// const readline = require('readline');
// // Create interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Ask a question
// rl.question('Enter your role: ', (input) => {
//   // input is a string, similar to gets
//   const trimmedInput = input.trim();
//   console.log(`You typed: ${trimmedInput}`);

//   let role = trimmedInput

//   if (role == "admin") {
//     console.log("Full access");
//   } else if (role == "editor") {
//     console.log("Partial access");
//   } else if (role == "viewer") {
//     console.log("Read-only access");
//   } else {
//     console.log("No access");
//   }
//   // Always close the interface
//   rl.close();
// });


// const readline = require('readline');
// // Create interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Ask a question
// rl.question('Enter a numeric score (0-100): ', (input) => {
//   // input is a string, similar to gets
//   const trimmedInput = input.trim();
//   console.log(`You typed: ${trimmedInput}`);

//   let score = trimmedInput

//   if (score >= 90) {
//     console.log("You got an A! Great Work!!");
//   } else if (score >= 80) {
//     console.log("You got a B. Good work!");
//   } else if (score >= 70) {
//     console.log("You got a C. Dont forget to study!");
//   } else {
//     console.log("You got a failing grade. Wow you did not do well.");
//   }
//   // Always close the interface
//   rl.close();
// });


// const login = false;

// const isLoggedIn = (login == true) ? "Yes" : "No";

// console.log(isLoggedIn);


// let fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("Apples are red.");
//     break;
//   case "banana":
//     console.log("Bananas are yellow.");
//     break;
//   case "grape":
//     console.log("Grapes are purple.");
//     break;
//   default:
//     console.log("Unknown fruit.");
// }

//--------------------------------------------------------------------------------
//loops
//for loop
// for (initializion; condition; finalExpression) {

// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }


// while loop
// while (condition) {

// }

// let count = 0;

// while (count < 3) {
//   console.log(count);
//   count++;
// }

// do loop 
// do {

// } while (condition)

// let number = 5;

// do {
//   console.log("Number is:", number);
//   number--;
// } while (number > 0);



// const person = { name: "Jess", age: 26 };

// for (let key in person) {
//   // console.log(key);
//   // console.log(person[key]);
//   console.log(key, "=", person[key]);
// }

// const fruits = ["apple", "banana", "cherry"];

// for (let fruit of fruits) { // make sure to use of instead of in - in prints the indexes rather than the actual value
//   console.log(fruit);
// }

// const word = "something";

// for (let char of word) {
//   console.log(char);
// }

//Exercises:
// let i = 10;

// do {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i--;
// } while (i > 0);


// const items = ["milk", "eggs", "cheese", "bread"]
// for (let item of items) {
//   if (item == "eggs") {
//     continue
//   } else {
//   console.log(item);
//   }
// }


// const user = { username: "alanna08", email: "alanna@mail.com", age: 23 };

// for (let key in user) {
//   console.log(key, "=", user[key]);
// }

// let count = 7;

// while (count < 6) {
//   console.log(count);
//   count++;
// }

// let number = 7;

// do {
//   console.log("Number is:", number);
//   number++;
// } while (number < 6);


// const fruits = ["apple", "banana", "cherry"];

//push - adds to the end of the array
// console.log(fruits);
// fruits.push("grape");
// console.log(fruits);

// //pop - removes the item at the end of the array
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// //unshift - adds to the beginning of the array
// console.log(fruits);
// fruits.unshift('mango');
// console.log(fruits);

// //shift - removes the item at the beginning of the array
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

//slice - copies a part of the array from the startIndex up to (but not including) the endIndex
// console.log(fruits);
// const coolFruits = fruits.slice(1, 2);
// console.log(coolFruits);

//splice - removes or replaces elements
// fruits.splice(2, 1, 'strawberry');

// console.log(fruits);

// Exercises:

// const foods = ["bacon", "rice", "eggs", "potato"];

// console.log(foods);
// foods.push("cabbage");
// console.log(foods);

// foods.pop();
// console.log(foods);

// console.log(foods);
// foods.shift();
// console.log(foods);

// console.log(foods);
// foods.unshift("spam");
// console.log(foods);

// console.log(foods);
// const bestFoods = foods.slice(0, 3);
// console.log(bestFoods);

// console.log(foods);
// foods.splice(2, 1, "burger");
// console.log(foods);


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//   console.log(number ** 2);
// });

// const squares = numbers.map(num => num ** 2);
// // console.log(squares);

// const evenNumbers = numbers.filter(num => (num % 2) === 0);
// // console.log(evenNumbers);

// const sum = numbers.reduce((total, num) => total + num, 0)
// // console.log(sum);

// Exercise:
// Use filter() to get only the passing grades.
// Use reduce() to calculate the average.

// const grades = [85, 92, 38, 90, 28]

// grades.forEach((grade) => {
//   console.log("Grade is " + grade + ".")
// });

// const extraCredit = grades.map(grade => grade + 5);
// console.log(extraCredit);

// const passing = grades.filter(grade => (grade >= 70));
// console.log(passing);

// const average = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// console.log(average);

//Practical Examples with Higher-Order Functions
// const products = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Phone', price: 800 },
//   { name: 'Tablet', price: 500 },
//   { name: 'Headphones', price: 150 },
// ];

// 1. Filter out expensive products (> $500)
// const expensive = products.filter(product => (product.price > 500));
// console.log(expensive);

// console.log(products[0].price)

// 2. Apply a 10% discount via map
// const discount = products.map(product => (product.price - (product.price * 0.1)));
// console.log(discount);

// const discountedPrice = products.map(product => ({
//   name: product.name,
//   price: product.price * 0.9
// }));
// console.log(discountedPrice);

// 3. Calculate the total price of discounted items with reduce
// const total = discountedPrice.reduce((total, product) => total + product.price, 0);
// console.log(total);

//Destructuring Assignment

// const rgb = [255, 200, 0];

// const [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

// const nested = [1, [2, 3], 4];

// const [one, [two, three], four] = nested;

// console.log(one, two, three, four);

// const user = {
//   name: 'Alanna', 
//   age: 22,
//   city: 'Tamuning'
// };

// const { name, age } = user;

// console.log(`${name}, is ${age} years old.`)

//setting default values 
// function greet(name = "Someone") {
//   console.log(`Hello ${name}`);
// }

// greet("Charles");



