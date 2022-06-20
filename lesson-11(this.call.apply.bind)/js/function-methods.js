"use strict";

/*
 *  Методи функції call та apply
 */

// const fn = function () {};

// fn.test = 5;

// console.log(fn.test);
// console.dir(fn);

//* Функції це об'єкты зі своїми властивостями та методами
// const greeting = function (userName) {
//   console.log(`Hello ${userName}`);
// };

//* call и apply

//? Викличте функцію showFullName в контексті об'єкта user (через присвоєння метода, call і apply)

// const showFullName = function (message, num) {
//   console.log(num);
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: "Ernest",
//   lastName: "Vasquez",
//   age: 30,
// };

// console.log(user);

// user.showFullName = showFullName;

// console.log(user);

// user.showFullName("Hello", 25 );

// showFullName.call(user, "Hello", 25);

// console.log(user);

// const anotherUser = {
//   firstName: "Bart",
//   lastName: "Simpson",
//   age: 25,
// };

// showFullName.call(anotherUser, "HELLO", 45);

// console.log(anotherUser);

// showFullName.apply(anotherUser, ["HELLO", 45]);

//? Викличте функцію showFullName в контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

// showFullName.call(anotherUser, 'Hello', 15);

//* Запозичення метода

// const createCurrentDate = function (...args) {
//   // v.1
//   // return args.join(".");
//   //
//   // v.2
//   // const data = Array.from(arguments)
//   // return data.join(".");
//   //
//   // v.3
//   // return [].join.call(arguments, ".")
// };

// const createCurrentDate = function(...args){
//     // args ~ []
//     // return args.join(".")
// }

// const createCurrentDate = function(){
//     const args = Array.from(arguments) // -> [20, 6, 22]
//     return args.join(".")
// }

// const createCurrentDate = function(){
//     // arguments = [20, 6, 22]
//     return [].join.call(arguments, ".")
// }

// const arr = [1,2,3]

// arr.join() // this = arr

// console.log(createCurrentDate(20, 6, 22)); // 20.6.22

//* bind
// const showFullName = function () {
//     // this = undefined || obj
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: "Ernest",
//   lastName: "Vasquez",
//   age: 30,
// };

// const showUserName = showFullName.bind(user);

// console.log(showUserName === showFullName);

// function showUserName(){
//     // this = user
//
// }

// showUserName();

// showUserName();

// const anotherUser = {
//   firstName: 'Rebecca',
//   lastName: 'Elliott',
//   age: 30,
// };

// const showAnotherUserName = showFullName.bind(anotherUser);

// showAnotherUserName();

//* Метод объекта в роли колбэка

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//     // this = undefined
//   callback(); // user.showName -> this = user
// };

// someFunction(user.showName.bind(user));

/*
? Що виведе данний код?
*/

// const f = function () {
//   console.log(this.name);
//   return this;
// };

// const user = {
//   name: "Вася",
// };

// const anotherUser = {
//   name: "Петя",
// };

// const copyFunc = f.bind(user); // fnRef with user in this
// // .bind(anotherUser); // newFnRef with user in this

// const newCopyFunc = copyFunc.bind(anotherUser);

// console.log(copyFunc === newCopyFunc);
// console.log(copyFunc());
// console.log(newCopyFunc());

// const arr = [1, 2, 3];

// arr
//   .map((el) => el * 2)
//   .join("-")
//   .toLowerCase();

// copyFunc(); // this -> user

/*
? Виклик checkPassword() в наведеному нижче коді повинен перевірити пароль а потім викликати user.loginOk/loginFail в залежності від відповіді.
? Проте, його виклик призводить до помилки. Чому?
 */

// const checkPassword = function (ok, fail) {
//   // this = undefined
//   // ok = user.loginOk
//   // fail = user.loginFail

//   const password = "rockstar";

//   if (password === "rockstar") {
//     //   this = undefined
//     ok(); //undefined() -> error
//   } else {
//     fail();
//   }
// };

// const checkPasswordSomeThis = function (ok, fail, context) {
//     // this = undefined
//     // ok = user.loginOk
//     // fail = user.loginFail
  
//     const password = "rockstar";
  
//     if (password === "rockstar") {
//       //   this = undefined
//       ok.call(context); //undefined() -> error
//     } else {
//       fail.call(context);
//     }
//   };

// const user = {
//   name: "Вася",

//   loginOk() {
//     console.log(`${this.name} logged in`);
//     // return undefined
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// const anotherUser = {
//   name: "Bob",

//   loginOk() {
//     console.log(`${this.name} logged in`);
//     // return undefined
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// checkPassword(user.loginOk.bind(anotherUser), user.loginFail.bind(anotherUser));

// checkPasswordSomeThis(user.loginOk, user.loginFail, user)
// checkPasswordSomeThis(user.loginOk, user.loginFail, anotherUser)
