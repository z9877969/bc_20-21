"use strict";
/*
 *  Метод sort()
 */

//? Сортування чисел та строк по замовчуванню
// Числа
// const numbers = [3, 7, 2, 8, 1, 35, 48, 42, 56];

// const sortedNumbers = [...numbers].sort();

// console.log("numbers :>> ", numbers);
// console.log("sortedNumbers :>> ", sortedNumbers);
// console.log(sortedNumbers === numbers);

// Строки
// const strArr = ["Addfs", "Aaasfas", "Bsadfdsa", "Dcvffd", "acvcvdvd"];
// const sortedStrArr = [...strArr].sort();

// console.log("sortedStrArr :>> ", sortedStrArr);

//? Сортування чисел за умовою (від більшого до меншого та навпаки)
// const numbers = [3, 7, 2, 8, 1, 42, 56];

// // const sortedNums = [...numbers].sort((a, b) => a - b);
// const sortedNums = [...numbers].sort((a, b) => b - a);

// console.log("sortedNums :>> ", sortedNums);

//? Сортування строк за умовою (від більшого до меншого та навпаки)
// const strArr = ["Abdfs", "Cdasfas", "Bsadfdsa", "Dcvffd", "acvcvdvd"];

// const sortedStrArr = [...strArr].sort((a, b) => {
//   //   if (a < b) return -1;
//   //   if (a > b) return 1;
//   //   return 0;
//   return b.localeCompare(a);
// });

// console.log("sortedStrArr :>> ", sortedStrArr);

/*
? Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований
? по зростанню значення властивості amount.
*/
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

// const sortByAscendingAmount = (cars) => {
//     return [...cars].sort((a,b) => {
//         return a.amount - b.amount
//     })
// }

// console.table(sortByAscendingAmount(cars));

/*
? Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований
? по спадінню значення властивості price.
*/

// const sortByDescendingPrice = (cars) => {
//     return [...cars].sort((a,b) => {
//         return b.price - a.price
//     }) 
// }

// console.table(sortByDescendingPrice(cars));

/*
? Нехай ф-я sortByModel повертає новий масив автомобілів відсортований по назві моделі
? в алфавітному и зворотному алфавітному порядку, в залежності від значення параметра order.
*/

// const sortByModel = (cars, order) => {
//     if(order === 'asc'){
//         return [...cars].sort((a,b) => {
//             return a.model.localeCompare(b.model)
//         })
//     } 
//     if(order === 'desc'){
//         return [...cars].sort((a,b) => {
//             return b.model.localeCompare(a.model)
//         })
//     }
// }

// // console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
