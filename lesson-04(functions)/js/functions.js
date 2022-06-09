"use strict";

/*
  Функціональні вирази та оголошення функції.
  Параметри, аргументи, повернення.
*/

// function назва_функції() {
//   Тіло функції
// }

// function sum(a, b) {
//   const res = a + b;
//   return res;
//   // return a + b;

//   // console.log("res :>> ", res); не працює
// }

// const result = sum(5, 10); // 15
// console.log(sum(2, 15));
// console.log(sum(10, 50));

// console.log("result :>> ", result);

// showMessage()

// function showMessage(userName = "guest") {
//   // console.log("Hello " + userName);
//   alert(`Hello ${userName}`);
// }

// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(1, 2));

// showMessage("Bart");
// showMessage("Bill");
// showMessage("Bob");
// showMessage("Nick");
// showMessage();

/*
  Напиши функцію calcBMI(wheit, height) яка розраховує і повертає індекс маси тіла людини.
  Для цього необхідно розділити вагу в кілограмах на квдрат зросту людини в метрах.
  Вага та зріст будуть спеціально передані як строки. Нецілі числа можуть бути задані 
  в вигляді 24.7 або 24,7, тобто в якості розділювача дробної частини може бути кома.
  Індекс маси тіла потрібно округлити до одного знаку після коми
*/

// const calcBMI = function (wheit, height) {
//   const parseWheit = parseFloat(wheit.replace(",", "."));
//   const parseHeight = parseFloat(height.replace(",", "."));
//   const bmi = parseWheit / parseHeight ** 2;
//   return bmi.toFixed(1);
// };

// console.log(calcBMI("80", "1,78"));
// console.log(calcBMI("65", "1.70"));
// console.log(calcBMI("70", "1.78"));
// console.log(calcBMI("50", "1.30"));

/*
  Напиши функцію min(a,b), яка повертає менше із чисел a і b.
*/

// const min = function (a, b) {
//   // if (a < b) {
//   //   return a;
//   // }
//   // return b;
//   return a < b ? a : b;
// };

// console.log(min(3, 5));
// console.log(min(12, 5));
// console.log(min(1, 5));
// console.log(min(54, 5));

/*
  Напиши функцію getRectArea(dimensions) для визначення площі прямокутника знаачення 
  якого будуть передані в параметр dimensions в вигляді строки.
  Значення гарантовано розділені пробілом.
*/

// const getRectArea = function (dimensions) {
//   const dimensionsArr = dimensions.split(" "); // ["10", "5"]
//   const area = dimensionsArr[0] * dimensionsArr[1];
//   return area;
// };

// console.log(getRectArea("10 5")); // 50
// console.log(getRectArea("5 25")); // 50
// console.log(getRectArea("3 4")); // 50

/*
  Напиши функцію logItems(items), яка отримує масив та використовє цикл for,
  який для кожного елемента масива буде виводить в консоль повідомлення в 
  форматі "номер_елемента - значення_елемента".
  Нумерація повинна починатися з 1.
  Наприклад для першого елемента масива ["Mango", "Poly", "Ajax"] з індексом 0 буде виведено
  1 -  "Mango"
*/

// const logItems = function (items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
//   // return undefined
// };

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["Apple", "Lemon", "Pear", "Cherry", "Strawberries"]);
// console.log(logItems(["Mango", "Poly", "Ajax"])); // undefined

/*
  Напиши функцію printContactsInfo(names, phones), яка виводить в консоль ім'я та 
  телефонний номер користувача.
  В пареметри names та phones будуть передані строки імен та номерів розділеених комами.
  Порядковий номер імен та телефонів в строках вказує на відповідність.
  Кількість імен та номерів гаронотовано однакова.
*/

// const printContactsInfo = function (names, phones) {
//   const namesArr = names.split(",");
//   const phoneArr = phones.split(",");
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phoneArr[i]}`);
//   }
// };

// printContactsInfo(
//   "Bob,Mark,Bart,Jack",
//   "89001234567,89001234467,89001238567,89001204567"
// );

// printContactsInfo(
//   "Tory,Rosie,Berta,Cary",
//   "89001434567,89001238467,89001338567,89001207567"
// );

/*
  Напиши функцію findLargestNumber(numbers) яка шукає найбільше число в масиві.  
*/

// const findLargestNumber = function (numbers) {
//   let max = numbers[0];
//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// };

// console.log(findLargestNumber([21, 15, 7, 35, 60, 22])); // 60
// console.log(findLargestNumber([33, 98, 14, 43, 54, 81, 7])); // 98

/*
  Напиши функцію calcAverage() яка приймає довільну кількість чисел та 
  визначає їх середнє значення.
  Всі аргументи будуть тільки числами.
*/

// const calcAverage = function () {
//   // console.log("arguments :>> ", Array.from(arguments));
//   let total = 0;
//   for (const number of arguments) {
//     total += number;
//   }
//   const average = total / arguments.length;
//   return average;
//   // return total / arguments.length;
// };

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(5, 6, 7, 8)); // 6.5
// console.log(calcAverage(15, 12, 3, 5, 45, 65, 987, 10)); // 10

/*
  Напишіть функції для роботи з колекцією навчальних курсів courses:
  addCourse(name) - додає курс в кінець колекції,
  removeCourse(name) - видаляє курс із колекції,
  updateCourse(oldName, newName) - змінює ім'я на нове,
  В усіх функціях зробити "захист від дурня".
*/

// const courses = ["HTML", "JS", "React", "Node", "PostgreSQL"];

// const addCourse = function (name) {
//   if (courses.includes(name)) {
//     console.log(`У вас вже є курс ${name}`);
//     return;
//   }
//   courses.push(name);
//   // courses.includes(name)
//   //   ? console.log(`У вас вже є курс ${name}`)
//   //   : courses.push(name);
// };

// addCourse("Node"); // У вас вже є курс Node
// addCourse("Python");
// console.log(courses); // ["HTML", "JS", "React", "Node", "PostgreSQL", "Python" ]

// const removeCourse = function (name) {
//   const indexOfCourse = courses.indexOf(name);
//   if (indexOfCourse !== -1) {
//     courses.splice(indexOfCourse, 1);
//     return;
//   }
//   console.log(`Курса ${name} не знайдено`);
// };

// removeCourse("ProjectManagment"); // Курса з такою назвою не знайдено
// removeCourse("PostgreSQL");
// console.log(courses); // ["HTML", "JS", "React", "Node", "Python" ]

// const updateCourse = function (oldName, newName) {
//   const indexOfCourse = courses.indexOf(oldName);
//   if (indexOfCourse !== -1) {
//     courses.splice(indexOfCourse, 1, newName);
//     return;
//   }
//   courses.push(newName);
//   console.log(`Курса ${oldName} не знайдено. Додано новий курс ${newName}`);
// };

// updateCourse("С++", "PHP"); // Курса C++ не знайдено. Додано новий курс PHP.
// console.log(courses);
// updateCourse("HTML", "HTML/CSS");
// console.log(courses); // ["HTML/CSS", "JS", "React", "Node", "Python"]

// ======================
// const a = 0;
// // a -> 0
// const fn = function () {
//   //  a -
//   const a = 5;
//   for (const el of arguments) {
//     // el -> 1
//     // a -
//     if (el > 0) {
//       // el -
//       // a -
//       console.log(el + a);
//     }
//   }
// };

// fn(1, 2, 3);
