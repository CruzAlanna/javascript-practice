//closure - when an inner function, remembers and can use the variables in an outer function, similar to private functions in ruby

// function createCart() {
//   let items = []; // only available after this line in the function

//   return {
//     addItem(itemName, quantity) {
//       items.push({ name: itemName, quantity });
//     },
//     removeItem(itemName) {
//       items = items.filter(item => item.name !== itemName);
//     },
//     getItems() {
//       return items;
//     }
//   };
// }

// const myCart = createCart(); 
// myCart.addItem('Apple', 3);
// myCart.addItem('Banana', 2);
// console.log(myCart.getItems()); 

// myCart.removeItem('Apple');
// console.log(myCart.getItems()); 

// Rest Operator 
// (...rest)

// function sum(...numbers) {
//   return numbers.reduce((total, number) => total + number, 0);
// }

// console.log(sum(1, 2, 3, 4, 5));

// spread operator 
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];

// console.log(arr2);


// const obj1 = { a: 1, b: 2 };

// const obj2 = { ...obj1, c: 3 };

// console.log(obj2);

// function multiply(x, y, z) {
//   return x * y * z;
// }

// const nums = [1, 2, 3, 5];

// console.log(multiply(...nums));

// Exercise: 

// function multiplyAll(...numbers) {
//   return numbers.reduce((total, number) => total * number, 1);
// }

// const num1 = [1, 1, 4];
// const num2 = [...num1, 2, 3, 2];

// console.log(num2);
// console.log(multiplyAll(...num2));

// const obj1 = { a: 1, b: 2 };

// const obj2 = { ...obj1, c: 3 };

// const merged = { ...obj1, ...{b: 5, c: 10}}
// console.log(merged);

//temperate literals = interpolation in javascript. use backticks and dollar sign `This random text ${price} is this much money.`