// Array 
// JAVA - нумерованный, одного типа значений, фиксированной длины

const students = [];
console.log(students);

const teachers = ["Alisher", "Igor", "Sergey"];
console.log(teachers);

// еще один способ создания массива
const animals = new Array(); // создаем пустой массив
const plants = new Array("Camomilla", "Rose", "Tulip"); // создаем массив с элементами
console.log(plants); // ["Camomilla", "Rose", "Tulip"]


// получить из массива элемент по индексу
const firstTeacher = teachers[0]; // Alisher
console.log(firstTeacher); // Alisher

// еще один способ получить элемент по индексу
const secondTeacher = teachers[1]; // Igor
console.log(secondTeacher); // Igor

const negativTeacher = teachers.at(-2); // Igor
console.log(secondTeacher); // Igor

console.log(plants); // ["Camomilla", "Rose", "Tulip"]
// хочу получить четвёртый элемент массива
plants[3] = "Basilik"; // undefined
console.log(plants); // ["Camomilla", "Rose", "Tulip", "Basilik"]

// хочу изменить третий элемент массива
plants[2] = "Lily"; // "Tulip"
console.log(plants); // ["Camomilla", "Rose", "Lily", "Basilik"]

// хочу удалить третий элемент массива
plants[2] = undefined; // "Lily"
console.log(plants); // ["Camomilla", "Rose", undefined, "Basilik"]
// хочу удалить третий элемент массива и сдвинуть все элементы вправо
plants.splice(2, 1); // ["Camomilla", "Rose", "Basilik"]
console.log(plants); // ["Camomilla", "Rose", "Basilik"]

// забирает последний элемент массива и возвращает его
// мы сохранили этот элемент в отдельную переменную
const Basilik = plants.pop(); // "Basilik"
console.log(plants); // ["Camomilla", "Rose"]
console.log(Basilik); // "Basilik"
//console.clear();
// let countdown = 3; // Сколько секунд до очистки

// function startCountdown() {
//     console.clear();
//     countdown = 3;
//     console.log('Консоль очищена! Новый отсчёт пошёл...');
    
//     const interval = setInterval(() => {
//         countdown--;
//         console.clear();
//         if (countdown > 0) {
//             console.log(`Очистка через ${countdown} секунды...`);
//         } else {
//             clearInterval(interval);
//             startCountdown(); // После обнуления запускаем заново
//         }
//     }, 1000); // Каждую секунду уменьшаем таймер
// }

// startCountdown();


// напишите метод, который принимает три параметра
// 1. массив возраст
// 2. имя
// 3. цвет волос
// пусть метод возвращает строку "Имя, цвет волос, возраст"
// 31, "Alisher", "brown" => "31, Alisher, brown"
// назовите метод createPersonalInfo
// function createPersonalInfo(ageArray, name, hairColor) {
//     const age = ageArray[0]; // получаем первый элемент массива
//     return `${age}, ${name}, ${hairColor}`; // возвращаем строку с параметрами
// } // конец функции createPersonalInfo
// console.log(createPersonalInfo([31], "Alisher", "brown")); // 31, Alisher, brown


// function createPersonalInfo(ageArray, name, hairColor) {
//     const age = ageArray[0];
//     return `${age}, ${name}, ${hairColor}`;
// }
// console.log(createPersonalInfo([31], "Alisher", "brown")); 

// function createPersonalInfo(age, name, hairColor) {
//     [age, name, hairColor];
//   }
// console.log(createPersonalInfo(31, "Alisher", "brown")); // 31, Alisher, brown

// shift - забирает элемент в начале, unshift - добавляет элемент в начало
// pop - забирает элемент в конце, push - добавляет элемент в конец
// splice - удаляет элемент по индексу, slice - вырезает элемент по индексу

function createPersonalInfo(age, name, hairColor) {
    [age, name, hairColor];
  }
  
  // shift - забирает элемент в начале, unshift - добавляет элемент в начало
  
  const cars = ["BMW"]; // [ 'BMW' ]
  cars.unshift("Mercedes"); // добавили элемент в начало массива
  console.log(cars); // [ 'Mercedes', 'BMW' ]
  
  // как забрать элемент из начала
  const mercedes = cars.shift();
  
  // О сложных местах
  // Почему мы сохранили в константу и изменения массива не вызвало проблемы
  
  const cities = ["Berlin"];
  const cities2 = cities;
  
  cities.push("London");
  
  console.log(cities2); // ["Berlin", "London"]
  
  cities2.push("Milan");
  
  console.log(cities); // [ 'Berlin', 'London', 'Milan' ]
  
  // Вопрос: как нам сделать копию значений массива, чтобы он был независимым от первого массива
  
  const newCities = [...cities]; // spread оператор
  
  newCities.push("Hamburg");
  
  console.log(cities); // [ 'Berlin', 'London', 'Milan' ]
  console.log(newCities); // [ 'Berlin', 'London', 'Milan', 'Hamburg' ]
  
  // как мы можем создать массив из двух других
  const array1 = ["a", "b", "c"];
  const array2 = ["e", "f", "g"];
  
  const alphabet = [...array1, ...array2];
  console.log(alphabet);  // [ 'a', 'b', 'c', 'e', 'f', 'g' ]
