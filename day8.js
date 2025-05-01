// Promise.all - lets you run multiple promises in parallel and wait until all of them are ready or fulfilled before moving on to the next.
// if one fails, they'll all fail
//dont need to make so many api requests just the one for all of the data

// async function fetchMultipleResources() {
//   const urls = [
//     'https://jsonplaceholder.typicode.com/posts/1',
//     'https://jsonplaceholder.typicode.com/users/2',
//     'https://jsonplaceholder.typicode.com/comments/3',
//   ];

//   try {
//     const responses = await Promise.all(urls.map(url => fetch(url)));

//     responses.forEach(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error. Status: ${response.status}`);
//       }
//     });

//     const dataPromises = responses.map(response => response.json());

//     const data = await Promise.all(dataPromises);

//     console.log('All Data Received:', data);

//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchMultipleResources();



//Promise.race - KINDA like the opposite of Promise.all. It returns the first promise that is resolved or rejected.
// Promise.race
// let's you proceed with the first Promise that completes
// helpful if you only care about the earliest response

// function createTimer(delay, name) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Timer ${name} finished in ${delay} ms`);
//     }, delay);
//   })
// }

// async function raceTimers() {
//   try {
//     const result = await Promise.race([
//       createTimer(1000, 'One'),
//       createTimer(2000, 'Two'),
//       createTimer(500, '.5')
//     ]);
//     console.log('Winner:', result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// raceTimers();



