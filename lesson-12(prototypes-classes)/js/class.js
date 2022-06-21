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

  #trimStr(str) {
    return str.trim();
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

person1.showFullName();
person1.changeHairColor("green");
person1.email = "            newUser@mail.com         ";
person1.age = 100;
// console.log(person1.email);
console.log(person1);

console.log("   object  ".trim());
