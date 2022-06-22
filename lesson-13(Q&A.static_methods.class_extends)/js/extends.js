"use strict";
/*
 * Наслідування с extends и super
 */

class User {
  #login;
  #email;

  constructor({ firstName, lastName, age, login, email } = {}) {
    // this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    // return this
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${this.#trimStr(this.firstName)} ${this.#trimStr(this.lastName)}`;
  }

  #trimStr(str) {
    return str.trim();
  }
}

class Manager extends User {
  constructor({ numberOfSales, ...otherProps }) {
    // this = {};
    super(otherProps); // constructor({ firstName, lastName, age, login, email })

    this.numberOfSales = numberOfSales;
    // return this;
  }

  doManagerWork() {
    console.log("Займаюсь продажем");
  }
}

const manager = new Manager({
  firstName: "Addie",
  lastName: "Burgess",
  age: 20,
  login: "someLogin",
  email: "uhmop@balninih.sd",
  numberOfSales: 20,
});

console.log(manager);

class Saler extends User {
  constructor({ numberOfSale, ...props }) {
    super(props);
    this.numberOfSale = numberOfSale;
  }
}

const saler1 = new Saler({
  firstName: "Addie",
  lastName: "Burgess",
  age: 20,
  login: "someLogin",
  email: "uhmop@balninih.sd",
  numberOfSale: 20,
});

console.log("saler1 :>> ", saler1);

class Developer {
  #login;
  #email;

  constructor({ firstName, lastName, age, login, email, numberOfSales } = {}) {
    // this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
    this.completedProjects = completedProjects;
    // return this;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${this.#trimStr(this.firstName)} ${this.#trimStr(this.lastName)}`;
  }

  #trimStr(str) {
    return str.trim();
  }

  doDeveloperWork() {
    console.log("Пишу проект");
  }
}

// const developer = new Developer({
//   firstName: 'Bertha',
//   lastName: 'Byrd',
//   age: 22,
//   login: 'myLogin',
//   email: 'tudeoh@ede.fm',
//   completedProjects: 45,
// });


// =========== Q&A ==============

// Manager.prototype.FUNCTION = function () {};

// console.log(manager.__proto__);

// [[Prototype]] === __proto__

// prototype

// class Test {
//   #id = 1;

//   constructor({ a, id }) {
//     //   this = {}
//     this.a = a;
//     this.fn = this.fn.bind(this);
//     this.#id = id;
//     // return this
//   }

//   static foo() {
//     console.log("Hello");
//   }

//   fn() {
//     console.log("Hello ", this.a); // this = undefined
//   }
// }

// function foo(cb) {
//   cb(); // undefined
// }

// const test = new Test(21);
// const test1 = new Test(32);
// const test2 = new Test(44);

// console.log("test :>> ", test); // {}

// foo(test.fn);
// foo(test1.fn);
// foo(test2.fn);

// // Number.parseFloat("21.2kjl");

// Number.parseFloat = function (str) {
//     console.log(str);
// };

// Number.parseFloat("21.2kjl");

// Test.foo =

// console.dir(Number.parseFloat);

// const a = 321;

// // a = "str"

// console.log("a :>> ", a);

// const b = 21;

// function foo() {
//   const a = 654;
//   // a
//   // b
//   if (true) {
//     const f = 54;
//   }
//   console.log("object");
//   return undefined;
// }
