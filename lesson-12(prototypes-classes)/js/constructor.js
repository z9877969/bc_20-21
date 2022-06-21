"use strict";
/*
 * Клас - шаблон по якому будуть створені однотипні об'єкти
 * Экземпляр - це об'єкт створений по класу
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор

const Person = function ({
  firstName,
  lastName,
  age,
  legs = 2,
  hands = 2,
  eyes = 2,
  hairColor,
  eyesColor,
}) {
  // this = obj
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.legs = legs;
  this.hands = hands;
  this.eyes = eyes;
  this.hairColor = hairColor;
  this.eyesColor = eyesColor;

  //   this.showFullname = function () {
  //     console.log(`${this.firstName} ${this.lastName}`);
  //   };

  // return obj
};

Person.prototype.showFullname = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

// Person.prototype.changeHairColor = function (newHairColor) {
//   this.hairColor = newHairColor;
// };

// const person1 = new Person({
//   firstName: "Edward",
//   lastName: "Smith",
//   age: 30,
//   hairColor: "brown",
//   eyesColor: "brown",
// });
// const person2 = new Person({
//   firstName: "Michael",
//   lastName: "Gill",
//   age: 20,
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: "white",
//   eyesColor: "blue",
// });

// console.log("person1 ", person1.showFullname === person2.showFullname);
// console.log("person2 ", person2);

// person1.showFullname();

// person2.changeHairColor("red");

// console.log("person2__proto__ :>> ", Object.getPrototypeOf(person2));

//TODO:  Створюємо людину по зразку

// const person1 = {
//   firstName: 'Edward',
//   lastName: 'Smith',
//   age: 30,
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: 'brown',
//   eyesColor: 'brown',
// };

// const person2 = {
//   firstName: 'Michael',
//   lastName: 'Gill',
//   age: 20,
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: 'white',
//   eyesColor: 'blue',
// };

//? Створюєм методи для наших екземплярів showFullName, changeHairColor

// ========================================
// window

// const obj = {
//     fn(){}
// }

// function fn(){}

// fn() // this = undefined

// object.fn() // this = object

// const testFn = function () {};

// function testFnDeclar() {}

// this = window

// const obj = {
//   testThis: this,
//   fn: function () {
//     // this = obj
//     const arrowFn = () => {
//       // this = obj
//     };
//   },
//   test: testFn, // function(){}
//   fnA() {
//     //   this = obj
//       console.log(this);
//   },
//   fnB: () => {
//     //   this = window
//       console.log(this);
//   },
//   fnC: function(){
//     //   this = obj
//       const objC = {
//         arrowFn: () => {
//             //  this = obj
//         }
//       }
//   }
// };

// console.log(obj.testThis);

// function fn() {
//   // this = undefined
//   const arrowFn = () => {
//     // this = window
//   };
// }

// obj.fn();
// obj.fnB();
// obj.fnC();
