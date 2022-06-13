"use strict";

/* 
    for..in, Object.keys, Object.values
*/

// Отримайте суму зарплат всіх працівників

const salaries = {
  Bob: 100,
  Jhon: 150,
  Bill: 200,
};

// Варіант через for..in
// let total = 0;

// for (const key in salaries) {
//   console.log("key :>> ", key);
//   console.log("salaries[key] :>> ", salaries[key]);
//   total += salaries[key];
// }
// console.log("total :>> ", total);
// console.log("salaries :>> ", salaries);

// Варіант через Object.keys
// const salariesKeys = Object.keys(salaries);
// let total = 0;

// for (const key of salariesKeys) {
//   console.log("key :>> ", key);
//   total += salaries[key];
// }

// console.log("salariesKeys :>> ", salariesKeys);
// console.log("total :>> ", total);

// Варіант через Object.values
// const salariesValues = Object.values(salaries);
// console.log("salariesValues :>> ", salariesValues);
// let total = 0;

// for (const value of salariesValues) {
//   total += value;
// }

// console.log("total :>> ", total);

// const db = {
//   todo: {
//     "-jklkjlkjaslkj": {
//       title: "T-1",
//       descr: "D-1",
//     },
//     "-jklkjsdmnbasl": {
//       title: "T-2",
//       descr: "D-2",
//     },
//   },
// };

// const arrDb = [
//   {
//     id: "-jklkjlkjaslkj",
//     title: "T-1",
//     descr: "D-1",
//   },
//   {
//     id: "-jklkjlkjaslkj",
//     title: "T-1",
//     descr: "D-1",
//   },
// ];

// const entriesArr = Object.entries(db.todo); // ["jkjhkjhkjh", "kjhjkhkjh"]
// console.log("entriesArr :>> ", entriesArr);

// const arrDbTransform = [];

// for (const entry of entriesArr) { // key
//   console.log("entry :>> ", entry);
//   const id = entry[0]; // key
//   const data = entry[1]; // keysArr[key]
//   const obj = Object.assign(data, { id: id });
//   console.log("obj :>> ", obj);
//   arrDbTransform.push(obj);
// }

// console.log("arrDbTransform :>> ", arrDbTransform);

// const obj = {
//   a: 0,
//   b: true,
// };

// const newObj = Object.create(obj);

// newObj.c = "Hello!";
// for (const key in newObj) {
//   if (newObj.hasOwnProperty(key)) {
//     console.log("own_key :>> ", key);
//   } else {
//     console.log("not_own_key :>> ", key);
//   }
// }

// console.log("obj :>> ", obj);
// console.log("newObj :>> ", newObj.b);

// const a = Object.assign({}, newObj, { d: 654 });
// const b = Object.assign(newObj, { d: 654 });

// console.log("a :>> ", a);
// console.log("b :>> ", b === newObj);
