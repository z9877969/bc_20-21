"use strict";
/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Статичні властивості та методи
 * Геттери та сеттери
 */
// Зробіть рефакторинг для функції конструктор Person
// створіть приватну властивість email та методи для роботи з нею
// перепишіть методи для роботи з властивістю email через геттер та сеттер
// створіть приватний метод trimStr та використайте його в роботі публічного метода changeFirstName

class Person {
  #email;
  #id = 0;

  persons = [];

  constructor({
    firstName,
    lastName,
    age,
    legs = 2,
    hands = 2,
    eyes = 2,
    hairColor,
    eyesColor,
    email,
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
    this.#email = email;
    // return obj
  }

  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  changeHairColor(newHairColor) {
    this.hairColor = newHairColor;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = this.#trimStr(newEmail);
  }

  addNewPerson() {
    this.#updateId(); // Person
    this.persons.push(this.#id);
  }

  #trimStr(str) {
    return str.trim();
  }

  #updateId() {
    this.#id += 1;
  }
}

const person1 = new Person({
  firstName: "Edward",
  lastName: "Smith",
  age: 30,
  hairColor: "brown",
  eyesColor: "brown",
  email: "user@mail.com",
});

// person1.showFullName();
person1.changeHairColor("green");
person1.email = "            newUser@mail.com         ";
person1.age = 100;
// console.log(person1.email);
console.log(person1);

console.dir(Person);

// console.log("   object  ".trim());

// console.dir(Number);

// console.log(Number.parseFloat("21.2llkj"));

const arr = new Array();
// const arr = Array.from(arguments)
const arr1 = Array(10)
  .fill("")
  .map((el, i) => i + 1);

console.log(arr1);

person1.addNewPerson();
person1.addNewPerson();
person1.addNewPerson();
person1.addNewPerson();

console.log(person1.persons);
