// const str = 'у користувача ім"я';
// console.log('str[45] :>> ', str[45]);

//? Запросіть у користувача ім"я, вік та виведіть в консоль повідомлення:
// Hello ім"я_користувача, age вік_коритувача
// const userName = prompt("Input name");
// const age = prompt("Input age");
// // console.log("Hello " + userName + ", age " + age);
// console.log(`Hello ${userName}, age ${age}`);

//? Запросіть у користувача ім"я та виведіть в консоль із скількох символів вона складається:
// const inputValue = prompt("Input");
// const inputLength = inputValue.length;
// console.log("inputValue :>> ", inputValue);
// console.log("inputLength :>> ", inputLength);
// console.log('inputValue[4] :>> ', inputValue[4]);

//? нормалізація
//  Запросіть у користувача email та привдіть його до нижнього.верхнього регістру:
// const email = prompt("Input email");
// const emailToLower = email.toLowerCase();
// console.log("emailToLower :>> ", emailToLower);
// const emailToUpper = email.toUpperCase();
// console.log("emailToUpper :>> ", emailToUpper);

//? Є строка "Html, JavaScript, React, Node, Vue":
// -дізнайтеся чи є JavaScript чи JS в данній строці
// -дізнайтеся на якій позиції знаходиться ця підстрока
// const str = "Html, JavaScript, React, Node, Vue";
// const isIncludes = str.includes("JS");
// console.log("isIncludes :>> ", isIncludes);
// const index = str.indexOf("JS");
// console.log("index :>> ", index);

//? У нас є строка 24px. визначте на що закінчується дана строка на em, %, px
// const str = "24px";
// const isInEnds = str.endsWith("px");
// // const isInEnds = str.endsWith("em");
// console.log("isInEnds :>> ", isInEnds);
// const isInStart = str.startsWith("24");
// console.log("isInStart :>> ", isInStart);

// Замініть в тексті "Lorem ipsum dolor, sit amet consectetur, adipisicing elit" символ ","
// на ";"
// const str = "Lorem ipsum dolor, sit amet consectetur, adipisicing elit";
// // const newStr = str.replace("o", "0");
// const newStr = str.replaceAll("o", "0");
// console.log("newStr :>> ", newStr);

// Виріжте з тексту "Lorem ipsum dolor, sit amet consectetur, adipisicing elit" підрядок "sit amet"
// const str = "Lorem ipsum dolor,_sit amet_consectetur, adipisicing elit";
// const findedStr = "sit amet";
// const indexStr = str.indexOf(findedStr); // 19
// const lastIndex = indexStr + findedStr.length;
// console.log("indexStr :>> ", indexStr);
// const slicedStr = str.slice(indexStr, lastIndex);

// console.log("slicedStr :>> ", slicedStr);

// const firstPart = str.slice(0, indexStr);
// console.log("firstPart :>> ", firstPart);

// const lastPart = str.slice(lastIndex);

// console.log(firstPart + lastPart);

