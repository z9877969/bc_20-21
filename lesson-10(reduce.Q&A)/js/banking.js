/* 
  Напишіть скрипт керування особистим кабінетом інтернет-банкінгу.
  Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

  Типів транзакцій всього два: 
  Можна покласти або зняти кошти з рахунку.

  Кожна транзакція це об'єкт з властивостями id, type та amount.
  {
    id: 1,
    type: "deposit",
    amount: 250
  }
*/

const Trancaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  // Поточний баланс
  balance: 0,
  // Початковий id для транзакції
  startId: 0, // 1 | 2

  // Історія транзакцій
  transactions: [],

  /* 
    Метод створює та повертає об'єкт транзакції.
    Приймає суму та тип транзакції.
  */
  createTransaction(amount, type) {
    this.generateId();

    return {
      id: this.startId,
      type,
      amount,
    };
  },

  // Генерація id для транзакції
  generateId() {
    this.startId += 1;
  },

  /* 
    Метод відповідальний за додавання суми до баланса.
    Приймає суму транзакції.
    Викликає createTransaction для створення об'кта транзакції
    після чого додає його в історію транзакцій.
  */
  deposite(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Trancaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /* 
    Метод відповідальний за зняття суми з баланса.
    Приймає сумму транзакції.
    Викликає createTransaction для створення об'кта транзакції
    після чого додає його в історію транзакцій.

    Якщо amount більше ніж поточний баланс, потрібно вивести повідомлення
    про те, що зняття такої суми не можливе, недостатньо коштів.
  */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Зняття ${amount} не можливе, недостатньо коштів`);
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Trancaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /* 
    Метод повертає поточний баланс.
  */
  getBalance() {
    return this.balance;
  },

  /* 
    Метод шукає та повертає об'єкт транзакції по id.
  */
  getTransactionDetails(id) {
    return this.transactions.find((el) => el.id === id);
  },

  /* 
    Метод повертає к-сть коштів певного типа транзакції з історії всіх транзакцій.
  */
  getTransactionsTotal(type) {
    return this.transactions
      .filter((el) => el.type === type)
      .reduce((acc, el) => acc + el.amount, 0);
  },

  getTransactions() {
    return this.transactions;
  },
};

// account.deposite(500);
// account.withdraw(300);
// account.deposite(500);
// account.deposite(500);
// account.withdraw(300);
// account.deposite(500);
// account.deposite(500);
// account.withdraw(300);
// account.withdraw(300);

// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactions());
// console.log(account.getTransactionsTotal(Trancaction.DEPOSIT));
// console.log(account.getTransactionsTotal(Trancaction.WITHDRAW));

// console.log(account.createTransaction(500, Trancaction.DEPOSIT));
// console.log(account.createTransaction(500, Trancaction.DEPOSIT));
// console.log(account.createTransaction(500, Trancaction.DEPOSIT));
// console.log(account.createTransaction(500, Trancaction.DEPOSIT));
// console.log(account.createTransaction(500, Trancaction.DEPOSIT));
// console.log(account.createTransaction(500, Trancaction.DEPOSIT));

const user = Object.create(account);

user.setName = function (name) {
  this.name = name;
};

user.getName = function () {
  return this.name || "guest";
};

// user.deposite(500);
// user.withdraw(300);
// user.deposite(500);
// user.deposite(500);
// user.withdraw(300);
// user.deposite(500);
// user.deposite(500);
// user.withdraw(300);
// user.withdraw(300);

user.setName("Bob");
// console.log(user.getName());
// console.log(user.getBalance());
// console.log(user.getTransactionDetails(2));
// console.log(user.getTransactions());
// console.log(user.getTransactionsTotal(Trancaction.DEPOSIT));
// console.log(user.getTransactionsTotal(Trancaction.WITHDRAW));

