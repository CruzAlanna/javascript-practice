// Review
// callback

// function delayedGreeting(name, callback) {
//   setTimeout(() => {
//     console.log(`Hello, ${name}!`);
//     callback();
//   }, 1000)
// }

// delayedGreeting('Damen', () => {
//   console.log('Greeting has finished.');
// });


// Math.random() - generates a random number between 0 and 1
// Math.floor() - rounds down to the nearest integer
// Math.ceil() - rounds up to the nearest integer
// Math.round() - rounds to the nearest integer
// Math.abs() - returns the absolute value of a number
// Math.pow() - raises a number to a power
// Math.sqrt() - returns the square root of a number
// Math.max() - returns the largest of zero or more numbers
// Math.min() - returns the smallest of zero or more numbers
// There are many more lol

// promise 

// const fetchNumber = new Promise((resolve, reject) => {
//   const num = Math.floor(Math.random() * 10);

//   if (num > 5) {
//     resolve(`Number is ${num}, which is greater than 5.`);
//   } else {
//     reject(`Number is ${num}, which is not greater than 5.`);
//   }
// });

// fetchNumber
//   .then((message) => {
//     console.log('Promise fulfilled:', message);
//   })
//   .catch((err) => {
//     console.error('Promise rejected:', err);
//   })




// async/await 

// function multiply(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be a number');
//       } else {
//         resolve(a * b);
//       }
//     }, 500);
//   })
// }

// async function showMultiplication() {
//   try {
//     const product = await multiply(4, 5);
//     console.log('Product:', product);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// showMultiplication();


//Exercises:

// Callbacks

// function loadNames(namesArray, callback) {
//   console.log("Fetching names...");
//   setTimeout(() => {
//     console.log("Names loaded");
//     callback(namesArray);
//   }, 1000);
// }

// const namesArray = ["Alice", "Bob", "Charlie"];

// loadNames(namesArray, (loadedNames) => {
//   loadedNames.forEach(name => console.log(name));
// });


// function loadUserData(callback) {
//   setTimeout(() => {
//     const userData = { firstName: "John", lastName: "Doe" };
//     console.log("User data loaded:", userData);
//     callback(userData);
//   }, 1000);
// }

// function formatUserData(userData, callback) {
//   setTimeout(() => {
//     const formatted = `User: ${userData.firstName} ${userData.lastName}`;
//     callback(formatted);
//   }, 1000);
// }

// loadUserData((user) => {
//   formatUserData(user, (formattedString) => {
//     console.log("Formatted Data:", formattedString);
//   });
// });


// Promises
// const coin = Math.random();

// function coinFlip() {
//   console.log(coin);
//   return new Promise((resolve, reject) => {
//     if (coin >= 0.5) {
//       resolve("Heads!");
//     } else {
//       reject("Tails!");
//     }
//   });
// }

// coinFlip()
//   .then((result) => {
//     console.log("Coin flip result:", result);
//   })
//   .catch((error) => {
//     console.log("Coin flip result:", error);
//   });


// function fetchScores() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // For demonstration, let's say there's a 10% chance of failure
//       const isError = Math.random() < 0.1;
//       if (isError) {
//         reject("Failed to fetch scores!");
//       } else {
//         resolve([90, 80, 75, 88]);
//       }
//     }, 1000);
//   });
// }

// fetchScores()
//   .then((scores) => {
//     console.log("Scores:", scores);
//     const sum = scores.reduce((total, score) => total + score, 0);
//     return (sum / scores.length);
//   })
//   .then((average) => {
//     console.log("Average Score:", average);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });


// fetch -  creating api requests in javascript for 'fetching' data

// const fetchUser = async () => {
//   try {
//     const response = await fetch('https://api.github.com/users/CruzAlanna');

//     if (!response.ok) {
//       throw new Error(`HTTP error. Status: ${response.status}`);
//     }

//     const userData = await response.json();
//     // console.log(userData); // for data that you don't know how it's formatted, run this first to see, then go below to get specifics
//     if (userData.site_admin == true) {
//       console.log('User is an admin!');
//     } else {
//       console.log('User is not an admin :(');
//     }
//     console.log(`User has ${userData.public_repos} public repositorites!`);
//     console.log(`User made account on ${userData.created_at}!`);
//     console.log(`User is following ${userData.following} GitHub user(s)!`);

//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// fetchUser();



// const fetchUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     if (!response.ok) {
//       throw new Error(`HTTP error. Status: ${response.status}`);
//     }

//     const users = await response.json();

//     users.forEach(user => {
//       console.log(`Name: ${user.name}, Email: ${user.email}`);
//     });
//   } catch (error) {
//     console.log(error)
//   }
// }

// fetchUsers();



