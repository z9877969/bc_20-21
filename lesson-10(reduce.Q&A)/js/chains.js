"use strict";
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

// const newCarsNames = cars.filter((el) => el.amount > 15).map((el) => el.model);
// const toyotaBigger15Names = cars
//   .filter((el) => el.make === "Toyota")
//   .filter((el) => el.amount > 15)
//   .map((el) => el.model);

// const newCarsNames = newCars.map(el => el.model)

// console.log('newCars :>> ', newCars);
// console.log("newCarsNames :>> ", newCarsNames);
// console.log("toyotaBigger15Names :>> ", toyotaBigger15Names);

/*
    Нехай ф-я getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, 
    котрі зараз на роспродажу.
*/

// const getAvailableCarNames = () =>
//   cars.filter((car) => car.onSale).map((el) => el.model);

// console.log(getAvailableCarNames(cars));

/*
? Нехай ф-я getSortedCarsOnSale повертає масив автомобілів на распродажу (властивість onSale),
? відсортованих по зростанню ціни.
*/

// const getSortedCarsOnSale = () =>
//   cars.filter((car) => car.onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

// [
//     {
//         id: "Cars",
//         names: ["BMW"]
//     },
//     {
//         id: "Users",
//         names: ["BMW"]
//     },
//     {
//         id: "Colors",
//         names: ["BMW"]
//     },
//     {
//         id: "Cars",
//         names: ["BMW"]
//     }
// ]

// {
//     "Cars": ["BMW"],
//     "Users": ["BMW"]
// }

// const arr = [{ a: "123" }, { a: 321 }, { a: "654" }, { a: "798" }];
// console.log(arr.includes({ a: "123" })); // arr[0] === { a: "123" }

// console.log(arr.find(el => el.a === "159"));
// console.log(arr.some(el => el.a === "951"));
// console.log(arr.every(el => typeof el.a === "string"));
