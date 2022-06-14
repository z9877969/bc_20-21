"use strict";

/* 
    Деструктуризація об'єктів.
*/

// const user = {
//   userName: "Bob",
//   email: "bob@mail.com",
//   age: 25,
// };

// const { userName, email, age, prop } = user;

// console.log(userName);
// console.log(email);
// console.log(age);
// console.log(prop);

/* 
    Напишіть деструктуризуюче присвоєння, яке:
    - властивість userName присвоїть в змінну userName
    - властивість age присвоїть в змінну userAge
    - властивість isActive присвоїть в змінну isActive(якщо нема такої властовості, то false)
*/

// const age = 32;

// const { userName, age: userAge, isActive = false } = user;

// console.log("isActive :>> ", isActive);

/* 
    Глибока деструктуризація об'єктів.
*/

// const team = {
//   number: 4,
//   flag: "./images/flag.jpg",
//   employes: ["Mark", "Steve", "Bogdan", "Viktor"],
//   langs: {
//     original: "uk",
//     secondary: "en",
//   },
// };

// const number = team.number;
// const employes = [...team.employes];
// const number = team.number;
// const number = team.number;

// const {
//   number,
//   flag,
//   employes: [...newEmployes],
//   langs: { original, ...rest },
// } = team;
// const { original, secondary } = langs;

// console.log("rest :>> ", rest);

/* 
    Деструктуризація масивів.
*/
// const names = ["Rock", "Bart", "Rosie", "Jack"];

// const [name1, name2, name3, name4] = names;

// console.log("names[0] :>> ", names[0]);
// console.log("name1 :>> ", name1);

/* 
    У нас є об'єкт salaries з зарплатами:
    - створіть ф-ю topSalary(salaries), яка повертає ім'я самого високоопачуваного працівника.
    - якщо об'єкт salaries пустий, то потрібно повернути null.
    - якщо декілька високооплачуваних працівників, то потрібно повернути будь-кого з них
    P.S. використовуйте Object.entries та деструктуризацію, щоб перебрати пари ключ значення.
*/

// const salaries = {
//   Jack: 250,
//   Bill: 300,
//   Bob: 100,
// };

// const topSalary = function (salaries) {
//   const salariesArr = Object.entries(salaries);
//   console.log("salariesArr :>> ", salariesArr);

//   let max = 0;
//   let employee = null;

//   for (const [name, salary] of salariesArr) {
//     // const [name, salary] = el;
//     // ["Jack", 250]
//     if (salary > max) {
//       max = salary;
//       employee = name;
//     }
//   }

//   return employee;

//   /* 
//     [
//         ["Jack", 250]
//         ["Bill", 300]
//         ["Bob", 100]
//     ]
//   */
// };

// console.log(topSalary(salaries));
