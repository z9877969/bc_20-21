"use strict";

/* 
  Операція spread як заміна методів slice та concat
*/

// Копія масива
// const arr = [1, 2, 3];
// const arr1 = [...arr];

// console.log("arr :>> ", arr);
// console.log("arr1 :>> ", arr1);
// console.log(arr === arr1);

// Об'єднання масивів
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const newArr = [12, 15, 13, ...arr1, 20, 23, 25, ...arr2, 7, 8, 9];

// console.log("newArr :>> ", newArr);

// Розпилення масива в функцію
// const nums = [1, 2, 3, 4, 5, 6];
// const min = Math.min(...nums);

// console.log("min :>> ", min);

// const str = "Hello!";
// console.log([...str]);

/* 
  Операція spread як заміна Object.assign({}, obj)
*/

// const user = {
//   name: "Bob",
//   email: "bob@mail.com",
//   isActive: false,
// };

// const newUser = Object.assign({}, user);

// const user2 = user;
// user2.name = "Bob2";

// const newUser = {
//   ...user,
// };

// newUser.name = "Jack";

// console.log("user :>> ", user);
// console.log("newUser :>> ", newUser);

/* 
  Розпилення складних типів.
  lodash.cloneDeep

*/
// const user = {
//   name: "Bob",
//   email: "bob@mail.com",
//   isActive: false,
//   somArr: [1, 2, 3],
// };

// const newUser = {
//   ...user,
// };
// const newUser = _.cloneDeep(user);

// newUser.name = "Bill";
// newUser.email = "bill@mail.com";
// newUser.somArr[3] = 4;

// console.log("user :>> ", user);
// console.log("newUser :>> ", newUser);

// console.dir(window._);

/* 
  Операція rest
*/
// Напишіть ф-ю яка буде додавати довільну к-сть аргументів

const fn = function (a, b, ...restNums) {
  console.log("a :>> ", a);
  console.log("b :>> ", b);
  console.log("restNums :>> ", restNums);

  let total = 0;

  for (const num of restNums) {
    total += num;
  }

  return total;
};

console.log(fn(1, 2, 3, 4, 5));
