"use strict";
/*
 * Ланцюжки прототипів.
 * [[Prototype]], __proto__
 * Object.create().
 * obj.hasOwnProperty()
 */

// const obj = {
//   a: 21,
// };

// const obj1 = Object.create(obj)
// obj1.b = "654"

// console.log(obj1);
// obj1.__proto__ = {};

// console.log("obj1_proto ",obj1.__proto__);

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

// const user = {
//   firstName: 'Kevin',
//   age: 30,
// };

// Створіть ланцюжок прототипів user2, user3 використавши user та додайте їм властивості

// const user2 = Object.create(user);
// user2.lastName = "Kelvin";

// const user3 = Object.create(user2);
// user3.email = "user3@mail.com"

// console.log('user :>> ', user);
// console.log('user2 :>> ', user2);
// console.log('user2 :>> ', user2.age);
// console.log('user3 :>> ', user3);
// console.log('user3.firstName :>> ', user3.first);

//* Власні властивості об'єкта та не власні властивості

//* Перевірка власних властивостей obj.hasOwnProperty()

// console.log(user2.hasOwnProperty("age"));


//* Цикл for...in, перебирає всі властивості, і власні і не власні.

// for(const prop in user3){
//   if(user3.hasOwnProperty(prop))
//   console.log('prop :>> ', prop);
// }

// user -> user2 -> user3 --> 
