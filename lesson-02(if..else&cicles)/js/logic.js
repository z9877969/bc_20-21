// приведення логічних операторів

// false === false;
// null === false;
// undefined === false;
// "" === false;
// 0 === false;
// NaN === false

// оператори порівняння <, >, >=, <=, ===, == / unicode
// console.log(1 < 2); // true
// console.log(5 > 3); // true
// console.log(4 >= 4); // true

// console.log("0" === 0); // false
// console.log("a" === "b"); // false
// console.log("A" > "a"); // false
// console.log("AA" < "Aa"); // true
// console.log(2 != "2"); // true

// && - зупиняється не брехні
// перевіряє всі операнди і якщо зустрічає брехню то повертає значення цього операнда
// інакше повертає значення останнього операнда
// const res = 2 && 5 // 5
// const b =  2 && "null" && 25  //
// console.log(b);
// const c = 0;
// c && console.log("c :>> ", c);

// || - зупиняється не правді
// перевіряє всі операнди і якщо зустрічає правду то повертає значення цього операнда
// інакше повертає значення останнього операнда
// const a = 5 || 0 || "" // 5
// const b = undefined || 0 || "" // ""
// console.log(b);

// ! - інверує значення правди в брехню і брехню в правду
// const a = 25; // true
// const b = !a; // false

// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(true && 4 && "polo"); // "polo"
// console.log(true && null && "polo"); // null
// console.log("" && null && "polo"); // ""
// console.log("polo" || null || 0); // "polo"
// console.log("polo" && null && 0 > 0); // null
// console.log(false || ("null" && 0) || 32); // 5
