"use strict";

/* 
  Напишіть скрипт який для об'єкта user послідовно:
    додає поле mod зі значенням "happy"
    заміняє значення hobby на "skydiving"
    змінює значення premium на false
    виводить зміст об'єкта user в форматі ключ:значення використовуючи Object.keys і for..of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
//   // colors: {}
// };

// user.mod = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// // user.premium = !user.premium;
// user.colors = {
//   red: true,
//   green: false,
//   yellow: true,
// };

// const keys = Object.keys(user);

// for (const key of keys) {
//   if (typeof user[key] === "object") {
//     console.log(key, " ==>> ", user[key]);
//   } else {
//     console.log(`${key} ==>> ${user[key]}`);
//   }
// }

// console.log(user);

/* 
   У нас є об'єкт, в якому зберігаються зарплати всіх працівників.
   Напишіть код для підсумування всіх зарплат та збережіть результат в змінній sum.
   Повинно бути 450. Якщо об'єкт salaries пустий, то результат повинен бути 0.
*/

// const salaries = {
//   Bob: 100,
//   Jhon: 150,
//   Bill: 200,
// };

// const values = Object.values(salaries);
// let total = 0;

// console.log(values);

// if(!values.length){
//   total = 0
// }

// for (const value of values) {
//   total += value;
// }

// console.log("total :>> ", total);

/* 
  Напишіть ф-ю calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та строку з назвою каменя.
  Ф-я підраховує та повертає суму всіх каменів з такою назвою.
  Якщо такого каменя немає, вивести відповідне повідомлення.
*/

// const stones = [
//   { name: "Діамант", price: 215, quntity: 2 },
//   { name: "Смарагд", price: 165, quntity: 5 },
//   { name: "Сапфір", price: 150, quntity: 3 },
//   { name: "Щебінь", price: 30, quntity: 4 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quntity;
//     }
//   }
//   console.log("So stone not find");
// };

// console.log(calcTotalPrice(stones, "Some Stone"));

/* 
  Напишіть скрипт керування особистим кабінетом інтернет-банкінгу.
  Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

  Типів транзакцій всього два: 
  Можна покласти або зняти кошти з рахунку.

  Кожна транзакція це об'єкт з властивостями id, type та amount.
*/

const Trancaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  // Поточний баланс
  balance: 0,
  // Початковий id для транзакції
  startId: 0,

  // Історія транзакцій
  transactions: [],

  /* 
    Метод створює та повертає об'єкт транзакції.
    Приймає суму та тип транзакції.
  */
  createTransaction(amount, type) {},

  // Генерація id для транзакції
  generateId() {
    this.startId += 1;
  },

  /* 
    Метод відповідальний за додавання суми до баланса.
    Приймає суму транзакції.
    Викликає createTransaction для створення об'кта транзакції
    після чого додає його в історію транзакцій.
  */
  deposite(amount) {},

  /* 
    Метод відповідальний за зняття суми з баланса.
    Приймає сумму транзакції.
    Викликає createTransaction для створення об'кта транзакції
    після чого додає його в історію транзакцій.

    Якщо amount більше ніж поточний баланс, потрібно вивести повідомлення
    про те, що зняття такої суми не можливе, недостатньо коштів.
  */
  withdraw(amount) {},

  /* 
    Метод повертає поточний баланс.
  */
  getBalance() {},

  /* 
    Метод шукає та повертає об'єкт транзакції по id.
  */
  getTransactionDetails(id) {},

  /* 
    Метод повертає к-сть коштів певного типа транзакції з історії всіх транзакцій.
  */
  getTransactionsTotal(type) {},
};
