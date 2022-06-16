/*
 *  Метод filter()
 */

// масив.filter((element, index, array) => {
// Тіло колбек-функції
// });

/*
? Відфільтруйте массив, щоб залишились тільки парні
*/
// const numbers = [1, 2, 3, 4, 5, 6];

// const newArr = numbers.filter((el) => {
//   //   if (el % 2 === 0) {
//   //     return true;
//   //   }
//   return el % 2 === 0;
// });
// const newArr = numbers.filter((el) => el % 2 === 0); // []

// console.log("newArr :>> ", newArr);

/*
? Відфільтруйте массив, залишивши в ньому тільки позитивні числа:
*/

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// const positiveNums = numbers.filter((el) => el >= 0);

// console.log("positiveNums :>> ", positiveNums);

/*
? Відфільтруйте массив heroes по властивості об'єкта franchise.
*/

// const heroes = [
//   { name: "Batman", franchise: "DC" },
//   { name: "Ironman", franchise: "Marvel" },
//   { name: "Thor", franchise: "Marvel" },
//   { name: "Superman", franchise: "DC" },
// ];

// const filteredHeroes = heroes.filter((el) => el.franchise === "DC");
// const filteredHeroesName = heroes.filter((el) => el.name === "Batman");

// console.log("filteredHeroes :>> ", filteredHeroes);
// console.log("filteredHeroesName :>> ", filteredHeroesName);

/*
? Нехай функція filterByPrice(cars, threshold) повертає масив автомобілів ціна яких
? меньша ніж значення параметра threshold.
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

// const filterByPrice = (cars, threshold) => {
//     return cars.filter((el) => {
//         return el.price < threshold
//     })
// }



// // console.log(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
? Нехай ф-я getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
*/

// const getCarsWithDiscount = (cars) => cars.filter(el => el.onSale);

// console.table(getCarsWithDiscount(cars));

/*
? Нехай ф-я getCarsWithType(cars, type) повертає масив автомобилів тип котрих
? співпадає зі значенням параметра type.
*/

// const getCarsWithType = (cars, type) => cars.filter((el) => el.type === type)

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// console.table(getCarsWithType(cars, 'truck'));

// ? Залишити тільки унікальні числа
// const numbers = [1, 2, 3, 3, 2, 1, 4, 5, 6, 4];

// const filteredNumbers = numbers.filter((el, idx, arr) => {
//     return idx === arr.indexOf(el)
// })

// console.log(filteredNumbers);
