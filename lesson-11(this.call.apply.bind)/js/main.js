"use strict";

/*
 *  Контекст вызова this
 */

/*
 * this існує тільки всередині функцій.
 * На контекст не впливає те, де функція была //!ОГОЛОШЕНА.
 * На контекст впливає те - де функція //!ВИКЛИКАЄТЬСЯ.
 */

// const fn = function () {
//     // context | this = window ---> undefined
//   console.log(this); //
// };

// user.fn();
// fn();

//TODO: Розглянемо як this поводить себе в методах
// const user = {
//   name: "Luis",
//   age: 30,

//   showThis() {
//     console.log("this -----> ", this);
//   },

//   showName() {
//     console.log("this :>> ", this);
//     console.log("name:", user.name);
//   },
// };

// user.showName();

// const anotherUser = {
//   name: "Luis",
//   age: 30,

//   showThis() {
//     console.log("this -----> ", this);
//   },

//   showName() {
//     console.log("this :>> ", this);
//     console.log(this === anotherUser);
//     console.log("name:", this.name);
//   },
// };

// anotherUser.showName();

//TODO: Розглянемо як this поводить себе в звичайних функціях (строгий, не строгий режим)

//? Function expression
// const greeting = function () {
//   console.log('this ---->', this);
//   console.log('Hello');
// };

// greeting();

//? Function declaration
// function greeting() {
//   console.log('this ---->', this);
//   console.log('Hello');
// }

// greeting();

//? Arrow function
// const greeting = () => {
//   console.log('this ---->', this); // window
//   console.log('Hello');
// };

// greeting();

//TODO: Присвоєння функції як метода объекта

// const showThis = function () {
//   console.log(`this ----> `, this);
// };

// const showThisName = function () {
//   console.log(`this name is: ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };

// user.showThisName = showThisName;
// console.log(user);

// showThisName(); // undefined.name

// user.showThisName(); // user.name

//TODO: Виклик метода об'єкта без контекста
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

// const showThis = user.showThis;
// const showName = user.showName;

// showName();
// user.showName();

//TODO: This в callback функціях

// const user = {
//   name: "Luis",
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   // callback = user.showName
//   // this = undefined
//   callback(); // error
// };

// const showNameCb = user.showName;

// someFunction(showNameCb); // error

//TODO: This в стрілочних функціях. Стрелочні функції не мають свого this, this в стрілках завжди посилається на батьківський this.
// const user = {
//   name: "Luis",
//   age: 30,

//   test: this, // window

//   changeAge: (newAge) => {
//     console.log(`this ---->`, this);

//     this.age = newAge;

//     // window.age = newAge;
//   },

//   //   changeAgeEx: function(){

//   //   }

// //   ПРИКЛАД! Предача контексту в стрілку
//     changeUserAge(newAge) {

//         // this = user

//       const changeAge = () => {
//           // this = user
//         console.log(`this ---->`, this);

//         this.age = newAge;
//       };

//       changeAge();
//     },
// };

// console.log(user.test);

// user.changeAge(40);
// console.log(user);

// user.changeUserAge(50);
// console.log(user);

/*
? Яким буде результат виконання данного кода?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     console.log(this.name); // undefined.name
//   },
// };

// const goFn = user.go;

// goFn();
// user.go();

/*
? Тут функція makeUser повертає об'ект.
? Яким буде результат при зверненні до властивості об'екта ref? Чому?
*/

// const makeUser = function () {
//   const obj = {
//     name: "Джон",
//     ref: this, // undefined
//   };
//   return obj;
// };

// const user = makeUser(); // {ref: this}

// console.log(user);
// console.log(user.ref.name); // user = {name: "Jhon", ref: undefined}.ref.name -> error | user.ref = undefined

/*
? Яким буде результат console.log
*/

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: () => {
//       console.log(this);
//       return this;
//     },
//   };
// }

// console.log(this);
// let user = makeUser();

/* 
user = {
    name: 'Джон',
    ref() {
        return this;
    },
}
*/

// console.log(user);
// console.log(user.ref().name); // Джон

/*
? Це ladder (сходи) – об'ект, який дозволяє підніматись вгору и спускатися:
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;

//     return this; // 1
//   },

//   down() {
//     this.step -= 1;

//     return this;
//   },

//   showStep() {
//     console.log(this.step);
//     return this;
//   },

//   getStep() {
//     return this.step;
//   },
// };

// Тепер, якщо нам потрібно зробить декілька послідовних викликів, ми можемо виконати це так:

// ladder.up(); // --> this = ladder
// ladder.up(); // --> this = ladder
// ladder.down();
// ladder.showStep();

// Змініть код методів up, down и showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад так:

// ladder.up().up().down().showStep().down().up().up().showStep();

// const { getStep } = ladder;
// const getStep = ladder.getStep
// getStep() // error
