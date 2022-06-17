// const fn = (value) => {
//   let a = value; // 5

//   const updateA = (n) => (a += n); // a = 0 + 5
//   const showA = () => console.log("a :>> ", a);
//   const getA = () => a;

//   return {
//     updateA,
//     showA,
//     getA,
//   };
// };

// const objFnA = fn(10); // lexEnvA -> a = 10 | updateA | showA | getA
// objFnA.getA()

// const o = {
//     // a: 10,
// }

// o.a // 10
// o.a = 15
// o.a // 15

// const objFnB = fn(15); // lexEnvB -> a = 10 | updateA | showA | getA
// const objFnC = fn(25);
// const objFnD = fn("str");
// const objFnE = fn(true);

// fn(15).showA(); // 15
// fn(15).updateA(10) // 15 + 10 = 25
// fn(15).showA(); // 15
// objFnA.updateA(5); // 5
// objFnA.updateA(10); // 15

// console.log(objFnA.getA());

// objFnA.showA(); // 5
// objFnB.showA(); //

// console.log("objFnA :>> ", objFnA);
