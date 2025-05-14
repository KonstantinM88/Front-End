// Promise - это объект, который представляет результат асинхронной операции
// Promise - это объект, который может находиться в одном из трех состояний:

// Статусы:
// rejected - отклоненный
// fulfilled - выполненный
// pending - ожидающий
// settled - завершенный

// сначала Promise находится в состоянии pending, затем он может перейти в состояние fulfilled или rejected
// fulfilled - это значит, что асинхронная операция завершилась успешно
// rejected - это значит, что асинхронная операция завершилась с ошибкой
// settled - это значит, что асинхронная операция завершилась (успешно или с ошибкой)

// Создадим Promise, который будет возвращать на бургер
const burger = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isBurgerReady = true;
    if (isBurgerReady) {
      resolve('Бургер готов');
    } else {
      reject('Бургер не готов');
    }
  }, 2000);
});

const burgerPromise = new Promise(function (resolve, reject) { // создаем новый Promise
    setTimeout(() => { // задержка
      resolve("Tasty burger"); // успешный результат
    // reject(new Error("The kitchen is on fire")); // ошибка
    }, 3000); // задержка
  });

  console.log(burgerPromise); // Promise { <pending> }
  // Promise { <pending> } - это значит, что Promise еще не завершился
    // Promise { <fulfilled> } - это значит, что Promise завершился успешно

// подождать значение === раскрыть промис
// then - это метод, который позволяет нам дождаться выполнения промиса
burgerPromise.then((burger) => { 
    console.log("Внутри колбека:" + burger); 
    // Внутри колбека:Tasty burger
});

console.log("Вне колбека:" + burgerPromise);
// Вне колбека:Promise { <pending> }

// Resolve - это метод, который позволяет нам завершить промис успешно
// Reject - это метод, который позволяет нам завершить промис с ошибкой
const badPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error("The kitchen is on fire"));
    }, 3000);
  });

  badPromise
  .then((burger) => {
    console.log(burger);
  })
  .catch((err) => {
    console.log(err.message);
  });

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log (getRandomNumber(2));
// Here is yor 3D printer
// Error: "Your 3D printer is not ready yet"
const printerPresent = new Promise(function (res, rej) {
    setTimeout(() => {
      if (getRandomNumber(2)) {
        res("Here is your 3D printer");
      }
      rej(new Error("You didn't behave this year!"));
    }, 2000);
  });

  printerPresent
  .then((present) => {
    console.log(present);
  })
  .catch((err) => {
    console.log(err);
  });
    
    