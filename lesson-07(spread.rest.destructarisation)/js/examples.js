"use strict";

/* 
    Перепишіть ф-ю так, щоб вона приймала один об'єкт параметрів.
    замість набора незалежних аргументів.

    Подивитись, що буде, якщо аргументи не передадуть.
*/

const calcBMI = function ({ wheit, height } = {}) {
  const bmi = wheit / height ** 2;
  return bmi.toFixed(1);
};

// Було
// console.log(calcBMI("150", "50"));
// console.log(calcBMI("130", "35"));
// console.log(calcBMI("170", "85"));

// Очікується
// console.log(calcBMI());
// console.log(calcBMI({ wheit: 30, height: 1.35 }));
// console.log(calcBMI({ wheit: 70, height: 1.85 }));

/* 
    Перепищіть ф-ю так, щоб вона приймала один об'єкт параметрів.
    замість набора незалежних аргументів.
*/

// const printContactsInfo = function ({names, phones}) {
//   console.log(names);
//   console.log(phones);
// };

// Було
// printContactsInfo(
//   "Tory,Rosie,Berta,Cary",
//   "89001434567,89001238467,89001338567,89001207567"
// );

// Очікується
// printContactsInfo({
//   names: "Tory,Rosie,Berta,Cary",
//   phones: "89001434567,89001238467,89001338567,89001207567",
// });

/* 
    Перепищіть ф-ю так, щоб вона приймала один об'єкт параметрів.
    замість набора незалежних аргументів.
*/

// const getBotsReport = function ({ company, bots: { repair, defence } }) {
//   return `${company} has ${repair + defence} bots in stock`;
// };

// Було
// console.log(getBotsReport("Cyberdyne System", 150, 50));

// Очікується
// console.log(
//   getBotsReport({
//     company: "Cyberdyne System",
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// );

/* 
    Напишіть функцію getStockReport(companyName, stock), щоб вона приймала об'єкт параметрів
    з властивостями companyName та stock і повертала звіт про к-сть товарів на складі довільної
    компанії
    P.S. Взяти за аналог попередню ф-ю
*/

// const getStockReport = function ({ company, stock }) {
//   const { ...rest } = stock;

//   const restValues = Object.values(rest);

//   let total = 0;

//   for (const value of restValues) {
//     total += value;
//   }

// //   console.log("restValues :>> ", restValues);

//   return `${company} has ${total} bots in stock`;
// };

// console.log(
//   getStockReport({
//     company: "Cyberdyne System",
//     stock: {
//       repair: 150,
//       defense: 50,
//     },
//   })
// );

// console.log(
//   getStockReport({
//     company: "Apple",
//     stock: {
//       iPhone: 150,
//       MacBook: 50,
//       airPods: 565,
//     },
//   })
// );

/* 
    Напишіть ф-ю createContact(partialContact) так, 
    щоб вона повертала новий об'єкт контакта з доданими полями id та createAt,
    а також list зі значенням "default", якщо в partialContact нема такої властивості.
*/

const generateId = function () {
  return "_" + Math.random().toString(36).substring(2, 9);
};

// const createContact = function ({ list = "default", ...partialContact }) {
// //   console.log("partialContact :>> ", partialContact);
//   const contact = {
//     ...partialContact,
//     id: generateId(),
//     createAt: new Date(),
//     list,
//   };

//   return contact;
// };

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );

// console.log(
//   createContact({
//     name: "Polly",
//     email: "polly@mail.com",
//   })
// );

/* 
    Напишіть ф-ю transformUserName(user) так, щоб вона повертала новий об'єкт 
    з властивістю fullName замість firstName та lastName
*/

// const transformUserName = function ({ firstName, lastName, ...user }) {
//   return {
//     ...user,
//     fullName: `${firstName} ${lastName}`,
//   };
// };

// console.log(
//   transformUserName({
//     id: 1,
//     firstName: "Bob",
//     lastName: "Parker",
//     email: "bob@mail.com",
//     friendsCount: 40,
//   })
// );

// console.log(
//   transformUserName({
//     id: 2,
//     firstName: "Rosie",
//     lastName: "Simpson",
//     email: "rosie@mail.com",
//     friendsCount: 56,
//   })
// );
