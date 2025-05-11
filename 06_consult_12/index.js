// Пример создания объекта

const student = {
  name: 'Иван',
    age: 20,
};

// Пример 2 - ключ может состоять из нескольких слов
// Если ключ состоит из нескольких слов и имеет пробелы, то его нужно заключить в кавычки
const product = {
    title: "iPhone",
    price: 2000,
    "model of phone": "XR"
};
// console.log(product["model of phone"]);
// Получить значение по ключу
console.log(product.price); // 2000
console.log(product["model of phone"]); // XR

// Положить значение по ключу
product.diagonal = 6.5;
product["type of adaptor"] = "USB-C";
console.log(product);

// Пример 3
// Если у нас есть переменная и мы хотим доставить значение
//  из объекта по этой переменной, то мы можем использовать квадратные скобки

let key = "age";
console.log(student[key]); // 20
key = "name";
console.log(student[key]); // Иван

// Пример 4
// Допустим, у нас были переменные и мы хотим создать объект из них
// то мы можем использовать квадратные скобки
// и записать в объект значение переменной по ключу, который мы хотим

const title = "Titanic";
const capacity = "1500";

const titanic = {title, capacity};
console.log(titanic); // { title: 'Titanic', capacity: '1500' }

// Пример 
// Создание объекта с помощью конструктора
    const car = new Object();
    car.brand = "BMW";
    car.year = 2020;
    car.price = 20000;
    car.isDiesel = true;
    console.log(car); // { brand: 'BMW', year: 2020, price: 20000, isDiesel: true }
    console.log(car.brand); // BMW
    console.log(car["year"]); // 2020
    console.log(car["isDiesel"]); // true

// Пример 5
const name1 = "Avrora";
const cap = "300";

// Хочу создать объект из переменных, но с другими названиями ключей

const avrora = {title: name1, capacity: cap};
console.log(avrora); // { title: 'Avrora', capacity: '300' }
