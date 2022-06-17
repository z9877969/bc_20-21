"use strict";
/*
 *  Метод reduce()
 */

// масив.reduce((previousValue, element, index, array) => {
// Тіло колбек-функції
// }, initialValue);

/*
? Порахуєм суму массива чисел
*/

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce((prevValue, el, index, arr) => {
//   //   console.log(prevValue);
//   const value = prevValue + el; // 0 + 1 = 1 | 1 + 2 = 3 | 3 + 3 = 6 | 6 + 4 = 10 | 10 + 5 = 15
//   return value;
// }, 0);

// {
//     "1": 1,
//     "2": 2,
// }

// const obj = numbers.reduce((acc, el) => {
//   const key = el.toString();
//   acc[key] = el;
// //   console.log("acc :>> ", acc);
//   return acc; // {}
// }, {});

// console.log("obj :>> ", obj);

// console.log("result :>> ", result);

/*
? Нехай ф-я getTotalAmount повертає загальну кількість автомобілів(значення властивості amount).
*/

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

const getTotalAmount = (cars) => {
  return cars.reduce((acc, { model, amount }, index) => {
    console.log("acc :>> ", acc);
    const data = {
      model,
      amount,
      sum: index - 1 >= 0 ? amount + acc[index - 1].sum : amount,
    };
    acc[index] = data; 
    // acc.push(data)
    return acc;
  }, []);
};

// [
//   {
//     model,
//     amount,
//     sum: amount,
//   },
//   {
//     model,
//     amount,
//     sum: amount + acc[index - 1].sum,
//   },
//   {
//     model,
//     amount,
//     sum: amount + acc[index - 1].sum,
//   },
// ];

console.log(getTotalAmount(cars));
