"use strict";

/*
  Масиви, літерал масива, індексація, довжина
  !!Масив - структура данних, яка може в собі зберігати обнотипні індексовані елементи
*/

// const arr1 = new Array(1, 2, 3);
// console.log(arr1);

// const arr = [1, 2, 5, 3, 645, 65];
// const arrLength = arr.length;

// console.log(arr[arr.length - 1]);

// const str = ""
// const str1 = new String("654654")

/*
  Створіть масив genres з елементами "Jazz" та "Blues"
  Додайте "Рок н ролл" в кінець (через індекс та методи масива).
  Виведіть в консоль перший елемент массива
  Виведіть в консоль останній елемент масива. Код повинен працювати для масива довільної довжини.
  Видаліть перший елемент масиву та виведіть його в консоль.
  Вставте "Country" та "Reggy" на початок масива.
*/
// const genres = ["Jazz", "Blues"];

// genres.push("Рок н ролл");
// genres[genres.length] = "Pop";

// genres.pop();

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());

// genres.unshift("Country", "Reggy");

// console.log(genres);
/*
  Передача за посиланням та по значенню
*/

/*
  Створіть змінну а = 10
  Створіть змінну b та просвойте їй значення а
  Виведіть в консоль обидві ці змінні
  Змініть значення а та виведіть обидві змінні в консоль
*/
// let a = 10;
// let b = a;
// console.log("a :>> ", a);
// console.log("b :>> ", b);

// a = 20;
// console.log("a :>> ", a);
// console.log("b :>> ", b);

/*
  Створіть масив аrrA = [1, 2, 3]
  Створіть масив arrB та просвойте значення масиву arrA
  Виведіть в консоль обидва цих масива
  Добавте елемент в масив arrA та виведіть обидва ці масиви в консоль
*/
// const аrrA = [1, 2, 3];
// const arrB = аrrA;
// console.log("arrA :>> ", аrrA);
// console.log("arrB :>> ", arrB);

// аrrA.push(54);
// console.log("arrA :>> ", аrrA);
// console.log("arrB :>> ", arrB);

/*
  Перебор масива циклами for, for..of
*/

/*
  Напиши скрипт для перебору масива fruits циклом for.
  Для кожного елемента виведи в консоль строку в форматі номер_елемента: значення_елемента.
  Нумерація елементів повинна починатися з 1.
*/
// const fruits = ["Apple", "Lemon", "Pear", "Cherry", "Strawberries"];

// for (let i = 0; i < fruits.length; i = i + 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

/*
  Напишіть скрипт пошука самого маленького числа в масиві.
  Код повинен працювати для любого масива чисел.
  Використайте цикл для вирішення задачі
*/
// const numbers = [10, 94, 6, -1, 13, 25, -37];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > min) {
//     min = numbers[i];
//   }
// }
// console.log("min :>> ", min);
/*
  for..of
*/
// const numbers = [10, 94, 6, -1, 13, 25, -37];
// let min = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }

/*
  У нас є масив з зарплатами працівників з різних відділів, потрібно порахувати загальну суму зарплат.
*/
// const salaries = [200, 400, 550, 320, 100];
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1) {
//   const salary = salaries[i]
//   total += salaries[i];
// }
// console.log("total :>> ", total);
/*
  for..of
*/
// const salaries = [200, 400, 550, 320, 100];
// let total = 0;

// for (const salary of salaries) {
//   total += salary;
// }

/*
  У нас є декілька масивів з зарплатами працівників з різних відділів. 
  Потрібно порахувати загальну суму зарплат.
  1варіант - два цикли
  2варіант - один цикл об"єднавши в один масив -> concat
*/
// const managerSalaries = [200, 400, 550, 320, 100];
// const developerSalaries = [800, 1500, 4000];

// // 1var
// let total = 0;

// for (let i = 0; i < managerSalaries.length; i += 1) {
//   total += managerSalaries[i];
// }
// console.log("total :>> ", total);

// for (let i = 0; i < developerSalaries.length; i += 1) {
//   total += developerSalaries[i];
// }

// for(const salary of managerSalaries){
//   total += salary
// }

// for(const salary of developerSalaries){
//   total += salary
// }

// console.log("total :>> ", total);

// // 2var
// let newTotal = 0;

// const salary = managerSalaries.concat(developerSalaries);
// // console.log("salary :>> ", salary);
// for (let i = 0; i < salary.length; i += 1) {
//   newTotal += salary[i];
// }

// console.log("newTotal :>> ", newTotal);

/*
  Вирішити дві попередні задачі за допомогою for..of
*/
// const arr = [1, 2, 3];

// for (const number of arr) {
//   console.log(number);
// }

/*
  Базові методи split, join, indexOf, includes, push, slice, splice, concat
*/

/*
  Напиши скрипт для обчислення площі прямокутного трикутника зі сторонами
  значення яких ззберігається в змінній values вигляді строки.
  Значення гарантовано розділені пробілом.
*/
// const values = "8 11";
// const valuesArr = values.split(" ");
// const area = (valuesArr[0] * valuesArr[1]) / 2;
// console.log("area :>> ", area);

/*
  Напиши скрипт який виводить в консоль ім"я та телефонний номер користувача.
  В змінних names та phones зберігаються строки імен та телефонних номерів розділених комами.
  Порядковий номер в імен та телефонів вказує на віідповідність
  Кількість імен та телефонів гарантовано однакова
*/
// const names = "Bart,Bob,Rosie,Jacob";
// const phone = "89001234567,89001232167,89004534567,89001987567";
// const namesArr = names.split(",");
// console.log("namesArr :>> ", namesArr);
// const phoneArr = phone.split(",");
// console.log("phoneArr :>> ", phoneArr);

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phoneArr[i]}`);
//   // console.log("ім'я: та телефонний номер");
// }

/*
  Напиши скрипт який "розгортає" строку (зворотний порядок букв) 
  та виводить його в консоль 
  1варіант: for зі строкою в зворотому порядку
  2варіант: push в зворотому порядку
  3варіант: reverse()
*/
// const str = "Welcome to the future";
// const strArr = str.split("");
// console.log("strArr :>> ", strArr);
// const reverseArr = [];
// for (let i = strArr.length - 1; i >= 0; i -= 1) {
//   reverseArr.push(strArr[i]);
// }
// const reverseArr = strArr.reverse()
// console.log("reverseArr :>> ", reverseArr);
// const reverseStr = reverseArr.join("");
// console.log("reverseStr :>> ", reverseStr);
// console.log(str.split("").reverse().join(""));

/*
  У нас є масив працівників.
  Відсортуйте його, щоб працівники не повторювались.
*/
// Рішення розібрати по ітераціям
// const employes = ["Dennis", "Show", "Jack", "Morris", "Show", "Jack"];
// const filteredEmploys = [];

// 1i
// i = 0
//

// for (let i = 0; i < employes.length; i += 1) {
//   if (i === employes.indexOf(employes[i])) {
//     filteredEmploys.push(employes[i]);
//   }
//   // i === employes.indexOf(employes[i]) && filteredEmploys.push(employes[i]);
// }

// console.log("filterdEmploys :>> ", filteredEmploys.push("654654"));
// console.log("filterdEmploys :>> ", filteredEmploys);

// Працівник Show звільнився, видаліть його з масиву. Використайте splice

// const indexOfShow = filteredEmploys.indexOf("Show");
// filteredEmploys.splice(indexOfShow, 1);

// console.log("filterdEmploys :>> ", filteredEmploys);

// Додайте нового працівника Morgan перед Jack
// const indexOfJack = filteredEmploys.indexOf("Jack");

// filteredEmploys.splice(indexOfJack, 0, "Morgan");

// console.log("filterdEmploys :>> ", filteredEmploys);