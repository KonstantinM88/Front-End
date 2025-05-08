console.log("Hello, Konstantin!");
// Объявление переменной и присвоение значения 6

/*
{
        "key": "shift+ctrl+l",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet": "console.log('${TM_SELECTED_TEXT}$1')$2;"
        }
      }
        */

// 7 примитивных типов данных в JavaScript
// 1. number - число
// 2. string - строка
// 3. boolean - логический тип (true/false)
// 4. null - значение "ничего" (отсутствие значения)
// 5. undefined - переменная объявлена, но не инициализирована (не имеет значения)
// 6. symbol - уникальный и неизменяемый примитивный тип данных, который используется для создания уникальных идентификаторов для свойств объектов
// 7. bigint - целые числа произвольной длины (больше, чем Number.MAX_SAFE_INTEGER)

// Тип переменной: number
let x;
x = 10; // Присваиваем значение 10 переменной x
console.log(x); // Выводим значение x в консоль

// Не целые числа тоже number
let Y = 12.5; // Присваиваем значение 12.5 переменной Y
console.log(Y); // Выводим значение Y в консоль

x = 13; // Присваиваем новое значение 13 переменной x
x = Y; // Присваиваем значение Y переменной x
console.log(x); // Выводим значение x в консоль

// Тип переменной: string
let name = "Konstantin"; // Присваиваем строку "Konstantin" переменной name
console.log(name); // Выводим значение name в консоль
let greeting = "Hello, " + name; // Конкатенация строк

x ='Ten'; // Присваиваем строку "Ten" переменной x
console.log(x); // Выводим значение x в консоль

// Тип bigint - целые числа произвольной длины
// Пример использования BigInt для работы с большими числами
let bigIntValue = 1234567890123456789012345678901234567890n; // Присваиваем большое целое число переменной bigIntValue
console.log(bigIntValue); // Выводим значение bigIntValue в консоль
let z = 123123n;

// Тип undefined - переменная объявлена, но не инициализирована (не имеет значения)
let message; // Объявляем переменную message, но не присваиваем ей значение
console.log(message); // Выводим значение message в консоль, которое будет undefined

// Тип null - значение "ничего" (отсутствие значения)
let secondName = null; // Присваиваем значение null переменной secondName
console.log(secondName); // Выводим значение secondName в консоль, которое будет null

// Тип boolean - логический тип (true/false)
let isMale = true; // Присваиваем значение true переменной isMale
console.log(isMale); // Выводим значение isMale в консоль, которое будет true

let isBigger = 10 > 4; // Присваиваем результат сравнения 10 > 4 переменной isBigger
console.log(" 10 > 4: " + isBigger); // Выводим значение isBigger в консоль, которое будет true

// Константы
const m = 12; // Объявляем константу m и присваиваем ей значение 12
// m = 13; // Попытка изменить значение константы m вызовет ошибку
// console.log(m); // Если раскомментировать эту строку, то будет ошибка, так как константу нельзя переопределить
console.log(m); // Выводим значение m в консоль, которое будет 12

const COLOR_RED = "#FF00"; // Объявляем константу COLOR_RED и присваиваем ей значение "#FF00"

// Symbol - уникальный и неизменяемый примитивный тип данных, который используется для создания уникальных идентификаторов для свойств объектов
const symbol = Symbol("asd"); // Создаем новый символ с описанием "asd"
console.log(symbol); // Выводим значение symbol в консоль, которое будет уникальным идентификатором
// в качестве уникальных ключей для объектов
const obj = {
  [symbol]: "value", // Используем символ в качестве ключа объекта
};
console.log(obj); // Выводим значение obj в консоль, которое будет объектом с уникальным ключом
console.log(obj[symbol]); // Выводим значение по ключу symbol в консоль, которое будет "value"

const user = {
    
        "email": "khamidov@gmail.com"
    };
    console.log(user);
    // Выводим объект user в консоль, который будет содержать email

// Пример использования символов для создания уникальных идентификаторов
const uniqueId1 = Symbol("id"); // Создаем уникальный идентификатор 1
const uniqueId2 = Symbol("id"); // Создаем уникальный идентификатор 2
console.log(uniqueId1 === uniqueId2); // Сравниваем уникальные идентификаторы, результат будет false, так как они разные

// Преобразование типов данных
// falsy values - значения, которые приводятся к false при приведении к логическому типу

// Явное и неявное преобразование типов данных
// Пример явного преобразования типов данных
let a = 5; // Объявляем переменную a и присваиваем ей значение 5
a = String(a); // Преобразуем значение a в строку
console.log(a); // Выводим значение a в консоль, которое будет строкой "

let ten = 10; // Присваиваем значение 10 переменной ten
let tenAsString = String(ten); // Преобразуем значение ten в строку
console.log(tenAsString); // Выводим значение tenAsString в консоль, которое будет строкой "10"
console.log(typeof ten); // Проверяем тип данных ten, который будет "number"
console.log(typeof tenAsString === 'string'); // Проверяем тип данных tenAsString, который будет "string"

 // typeof tenAsString; // Проверяем тип данных tenAsString, который будет "string"

// 0, "", null, undefined, NaN - все эти значения приводятся к false при приведении к логическому типу
// Пример использования falsy values


// Неявное преобразование к строке
let elewenAsString = 11 + ""; // Преобразуем число 11 в строку с помощью конкатенации
console.log(elewenAsString); // Выводим значение elewenAsString в консоль, которое будет строкой "11"

// Пример неявного преобразования к числу
// '11' -> 11
let elewen = Number(elewenAsString); // Преобразуем строку "11" в число
console.log(elewen); // Выводим значение elewen в консоль, которое будет числом 11
console.log(typeof elewen); // Проверяем тип данных elewen, который будет "number"
console.log(typeof elewenAsString); // Проверяем тип данных elewenAsString, который будет "string"

let wrongNumber = Number("asdqwdsle3alads"); // Преобразуем строку "asdqwdsle3alads" в число
console.log(wrongNumber); // Выводим значение wrongNumber в консоль, которое будет NaN (Not a Number)
// console.log(typeof wrongNumber); // Проверяем тип данных wrongNumber, который будет "number"
console.log(typeof NaN); // Проверяем тип данных NaN, который будет "number"
if (x < Infinity) {
  console.log('Blah'); // Выводим сообщение в консоль, если x меньше Infinity
}
console.log(typeof Infinity); // Проверяем тип данных Infinity, который будет "number"
console.log(typeof -Infinity); // Проверяем тип данных -Infinity, который будет "number"

// Самое интересное это преобразование в boolean
// явное преобразование в boolean
console.log(Boolean("Konstantin")); // Преобразуем строку "Konstantin" в boolean, результат будет true
console.log(Boolean("12")); // Преобразуем строку "12" в boolean, результат будет true
console.log(Boolean("")); // Преобразуем пустую строку в boolean, результат будет false
console.log(Boolean(0)); // Преобразуем число 0 в boolean, результат будет false
console.log(Boolean(-0)); // Преобразуем число -0 в boolean, результат будет false
console.log(Boolean(NaN)); // Преобразуем NaN в boolean, результат будет false
console.log(Boolean(null)); // Преобразуем null в boolean, результат будет false
console.log(Boolean(undefined)); // Преобразуем undefined в boolean, результат будет false
console.log(Boolean(Infinity)); // Преобразуем Infinity в boolean, результат будет true
console.log(Boolean(-Infinity)); // Преобразуем -Infinity в boolean, результат будет true

// неявное преобразование в boolean
const moneyPoint = 12; // Присваиваем значение 12 переменной moneyPoint
const myBrotherMoneyPoint = 0; // Присваиваем значение 0 переменной myBrotherMoneyPoint
if (moneyPoint) { // Проверяем, если moneyPoint истинно (не равно 0)
  console.log("I have money"); // Выводим сообщение в консоль, если moneyPoint истинно
}
if (myBrotherMoneyPoint) { // Проверяем, если myBrotherMoneyPoint истинно (не равно 0)
  console.log("I have money"); // Выводим сообщение в консоль, если myBrotherMoneyPoint истинно
}

let myUser = null; // Присваиваем значение null переменной myUser
if(myUser){
    console.log('User exists'); // Проверяем, если myUser истинно (не равно null)
}

myUser = {email: "user@gmail.com"}; // Присваиваем объект с email переменной myUser

if(myUser){
    console.log(myUser.email); // Проверяем, если myUser истинно (не равно null) и выводим email в консоль
}

// Шаблонные строки (template strings) - это строки, которые позволяют использовать интерполяцию и многострочные строки

const myAge = 45; // Присваиваем значение 45 переменной myAge
const myName = "Konstantin"; // Присваиваем строку "Konstantin" переменной myName
const myString = `Меня зовут: ${myName} мне ${myAge} лет`; // Создаем шаблонную строку с интерполяцией
console.log(myString); // Выводим значение myString в консоль, которое будет "Меня зовут: Konstantin мне 45 лет"
// Пример многострочной строки



