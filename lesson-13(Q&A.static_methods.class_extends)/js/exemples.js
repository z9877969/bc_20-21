/*
? Напишіть клас Blogger для створення об'єкта блогера з наступними властивостями:
? email - email
? age - вік, число
? numberOfPosts - к-сть постів, число
? topics - масив тем на яких спеціалізується блогер
? Класс очікує один параметр - об'єкт налаштувань з однойменними властивостями.
? Додайте метод getInfo(), який, повертає строку: Blogger ${email} is ${вік} years old and has ${к-сть постів} posts.
? Додайте метод updatePostCount(value), який в параметрі value приймає к-сть постів які потрібно додати користувачу.
*/



// Виклики для перевірки:
// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });

// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

/*
? Напишіть класс Storage який створює об'єкти для керування складом товарів.
? При виклику буде отримувати один аргумент - початковий масив товарів, та записувати його в властивість items.
? Додайте методи класа:
? getItems() - повертає масив товарів.
? addItem(item) - отримує новий товар и додає його до поточних.
? removeItem(item) - отримує товар та, якщо він є, видяляє його з поточних.
*/


// Виклики для перевірки:
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]

/*
? Напишіть клас User який створює об'єкт з властивостями login та email.
? Оголосіть приватні властивості #login та #email, доступ до яких зробіть через геттер та сеттер login і email.
*/


// Виклики для перевірки
// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.email); // poly@mail.com
// poly.email = 'poly@mopva.fj';
// console.log(poly.email); // poly@mopva.fj

/*
? Напишіть клас Notes який керує колекцією заміток в властивості items.
? Замітка це об'єкт з властивостями text и priority.
? Додайте класу статичну властивість Priority, в якій буде зберігатись об'єкт з пріоритетами.
?
? priority = {
?   LOW: 'low',
?   NORMAL: 'normal',
?   HIGH: 'high'
? }
?
? Додайте методы addNote(note), removeNote(text) та updatePriority(text, newPriority).
*/

// Виклики для первірки:
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);

/*
? Напишіть клас Toggle який приймає об'єкт налаштуваннь {isOpen: boolean}
? и оголошує одну властивість on - стан вкл/выкл (true/false).
? По замовчуванню значення властивості on повинно бути false.
*/


// Виклики для первірки:
// const firstToggle = new Toggle({ isOpen: true });

// console.group('firstToggle');
// console.log(firstToggle.on);

// firstToggle.toggle();

// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();

// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
