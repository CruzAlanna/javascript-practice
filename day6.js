//asyncronous
// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 2000);

// console.log("3");

// console.log("Start");

// function doSyncTask() {
//   for (let i = 0; i < 3; i++) {
//     console.log("Sync task in progress:", i);
//   }
// }

// doSyncTask();
// console.log("End");


// console.log("A");
// setTimeout(() => console.log("B"), 0); #0 millimeters is still a wait, just it immediately does the next thing before it runs
// console.log("C");
// this prints A, C, B

// //callbacks- allow you to specify what should happen after a function without interrupting the code.

//there's a thing called callback hell- we DO NOT want this. it's basically a bunch of nested callbacks. we can fix this with promises. maybe only one of two nested callbacks is okay but after three it's not what we want.


// function fakeAsyncOperation(data, callback) {
//   console.log('Processing:', data);
//   setTimeout(function() {
//     callback(data + '[processed]');
//   }, 1000);
// }

// fakeAsyncOperation('file1', function(result) {
//   console.log('Result:', result);
// });


// delayedGreeting.js

// function delayedGreeting(name, delay, callback) {
//   setTimeout(() => {
//     console.log(`Hello, ${name}!`);
//     if (callback) {
//       callback();
//     }
//   }, delay);
// }

// // Example usage:
// delayedGreeting('Alice', 1000, () => {
//   console.log('Greeting complete!');
// });


// function delayedGreet(name, delay, callback) {
//   setTimeout(() => {
//     console.log(`Hey ${name}!, how are you?`);
//     if (callback) {
//       callback();
//     }
//   }, delay);
// }

// delayedGreet('Alanna', 2000, () => {
//   console.log(`Greeting is complete.`);
// });


// chainedCallbacks.js

// 1) Get user name (simulated)
// function getUser(callback) {
//   console.log("Fetching user... wait a moment");
//   setTimeout(() => {
//     const userName = 'Alanna';
//     console.log('Fetched user:', userName);
//     callback(userName);
//   }, 3000);
// }

// // 2) Build a welcome message
// function getWelcomeMessage(name, callback) {
//   setTimeout(() => {
//     const message = `Welcome, ${name}!`;
//     callback(message);
//   }, 2000);
// }

// function fetchUserProfile(name, callback) {
//   console.log('Fetching User Profile... wait a moment');
//   setTimeout(() => {
//     const profile = `    ${name}'s profile:
//     user name: ${name}
//     age: 23
//     email: ${name}@email.com
//     phone number: 123-456-7890`;
//     console.log(`Fetched ${name}'s profile`);
//     callback(profile);
//   }, 5000);
// }

// // Chaining them together
// getUser((userName) => {
//   getWelcomeMessage(userName, (welcomeMsg) => {
//     console.log('Final message:', welcomeMsg);
//     fetchUserProfile(userName, (profile) => {
//       console.log(profile);
//     })
//   });
// });

// Notice how callbacks can become nested, leading to code that’s harder to read—this is a stepping stone to learning Promises or async/await.

// Promises

// const myPromise = new Promise((resolve, reject) => {
//   const success = false;

//   if (success) {
//     resolve('Promise fulfilled!');
//   } else {
//     reject('Promise rejected.');
//   }
// });

// myPromise
//   .then((message) => {
//     console.log('Success:', message);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   });



// const isReady = false;

// const checkReadiness = new Promise((resolve, reject) => {
//   if (isReady) {
//     resolve('Everything is ready!');
//   } else {
//     reject('Not ready yet.');
//   }
// })

// checkReadiness
//   .then((message) => {
//     console.log('Success:', message);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   })


//Exercise: NOTE: the Promise cannot be inside the Timeout, else the .then and .catch wont work. also, each .then will create a new promise in itself
// function randomResult() {
//   console.log(number);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (number > 0.5) {
//         resolve('Number is closer to 1.');
//       } else {
//         reject('Number is closer to 0.');
//       }
//     }, 1000);
//   });
// }

// const number = Math.random(); //  Math.random() generates a random number between 0 and 1

// randomResult()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });



//chained promises// promise chaining
// function add(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be numbers.');
//       } else {
//         resolve(a + b);
//       }
//     }, 1000);
//   })
// }

// add(2, 3)
//   .then((sum) => {
//     console.log('Sum:', sum);
//     return add(sum, 4);
//   })
//   .then((newSum) => {
//     console.log('New Sum:', newSum);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   })


// function promisesStep1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Step 1 complete');
//       resolve('Data from Step 1');
//     }, 1000);
//   });
// }

// function promisesStep2(dataFromStep1) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Step 2 received:', dataFromStep1);
//       resolve('Final Result');
//     }, 1000);
//   });
// }

// promisesStep1()
//   .then((result1) => {
//     return promisesStep2(result1);
//   })
//   .then((result2) => {
//     console.log('Final output:', result2);
//   })
//   .catch((error) => {
//     console.error('An error occurred:', error);
//   });



// function fakeAsyncOperation() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Async operation done');
//       resolve(10);
//     }, 500);
//   });
// }

// fakeAsyncOperation()
//   .then((value) => {
//     console.log('Received:', value);
//     return value * 2;
//   })
//   .then((newValue) => {
//     console.log('Next step sees:', newValue);
//     return 'All done!';
//   })
//   .then((finalValue) => {
//     console.log('Final value:', finalValue);
//   })
//   .catch((err) => {
//     console.error('Error occurred:', err);
//   });


// function stepA(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Step A complete');
//       resolve(num + 1);
//     }, 500);
//   });
// }

// function stepB(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num > 5) {
//         reject('stepB error: number is too large!');
//       } else {
//         console.log('Step B complete');
//         resolve(num * 2);
//       }
//     }, 500);
//   });
// }

// function stepC(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Step C complete');
//       resolve(num - 1);
//     }, 500);
//   });
// }

// // Chain them:
// stepA(3)
//   .then((resultA) => {
//     console.log('Result A:', resultA);
//     return stepB(resultA); // Might reject if resultA > 5
//   })
//   .then((resultB) => {
//     console.log('Result B:', resultB);
//     return stepC(resultB);
//   })
//   .then((resultC) => {
//     console.log('Final result:', resultC);
//   })
//   .catch((error) => {
//     console.error('Chain error:', error);
//   });

//async/await
// function add(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be numbers.');
//       } else {
//         resolve(a + b);
//       }
//     }, 1000);
//   })
// }

// const fetchData = async () => {
//   try {
//     const result = await add(5, 7); // Wait for the Promise to resolve, then run the Result:, the thing with this, you can keep adding await add(), dont have to write a bunch of .thens
//     console.log('Result:', result);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchData();


// function multiply(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be numbers.');
//       } else {
//         resolve(a * b);
//       }
//     }, 1000);
//   })
// }

// async function showMultiplication() {
//   try {
//     const result = await multiply(4, 5);
//     console.log('Result:', result);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// showMultiplication();

// same function as above with different wait time
// function multiply(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a !== 'number' || typeof b !== 'number') {
//         reject('Input must be a number!');
//       } else {
//         resolve(a * b);
//       }
//     }, 500);
//   })
// }


// async function doMultipleThings() {
//   try {
//     const step1 = await multiply(2, 3);
//     console.log('Step 1:', step1);

//     const step2 = await multiply(step1, 4);
//     console.log('Step 2:', step2);

//     const step3 = await multiply(step2, 4);
//     console.log('Step 3:', step3);
//     const niceProduct = step3 + 4;
//     console.log('Add 4:', niceProduct);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// doMultipleThings();


// fetch api 

// const fetchUser = async () => {
//   try {
//     const response = await fetch('https://api.github.com/users/CruzAlanna')

//     if (!response.ok) {
//       throw new Error(`HTTP error. Status: ${response.status}`)
//     }

//     const userData = await response.json();
//     console.log(`${userData.name} has ${userData.public_repos} public GitHub repos!`);

//     console.log(userData);

//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchUser();


// function fetchUserData(userId) {
//   // Return a new Promise
//   return new Promise((resolve, reject) => {
//     // Use fetch (built-in in modern browsers, Node 18+, or via polyfill)
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then((response) => {
//         if (!response.ok) {
//           // If we get an HTTP error (e.g., 404), reject with an error
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         // Otherwise, parse and return JSON data
//         return response.json();
//       })
//       .then((data) => {
//         // Resolve the Promise with the fetched user data
//         resolve(data);
//       })
//       .catch((error) => {
//         // Reject the Promise if any error occurs
//         reject(error);
//       });
//   });
// }

// // How to use this function:
// fetchUserData(1)
//   .then((user) => {
//     console.log('User data:', user);
//   })
//   .catch((err) => {
//     console.error('Error fetching user:', err);
//   });