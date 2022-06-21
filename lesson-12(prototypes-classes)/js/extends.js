'use strict';
/*
 * Наслідування с extends и super
 */
// class User {
//   #login;
//   #email;

//   constructor({ firstName, lastName, age, login, email } = {}) {
//     // this = {};
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.userAge = age;
//     this.#login = login;
//     this.#email = email;
//     // return this;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   getFullName() {
//     return `${this.#trimStr(this.firstName)} ${this.#trimStr(this.lastName)}`;
//   }

//   #trimStr(str) {
//     return str.trim();
//   }
// }

// Створіть класс Manager який наслідується від класа User
// додайте йому публічну властивість numberOfSales
// додайте йому метод getFullName який наслідує такий же метод з батьківського класа
// додайте йому метод doManagerWork який виводить в консоль повідомлення "Займаюсь продажем"


// const manager = new Manager({
//   firstName: 'Addie',
//   lastName: 'Burgess',
//   age: 20,
//   login: 'someLogin',
//   email: 'uhmop@balninih.sd',
//   numberOfSales: 20,
// });


// Створіть класс Developer який наслідується від класа User
// додайте йому публічну властивість completedProjects
// додайте йому метод doDeveloperWork який виводить в консоль повідомлення "Пишу проект"


// const developer = new Developer({
//   firstName: 'Bertha',
//   lastName: 'Byrd',
//   age: 22,
//   login: 'myLogin',
//   email: 'tudeoh@ede.fm',
//   completedProjects: 45,
// });
