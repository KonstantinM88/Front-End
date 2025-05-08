let fruit = "apple"; // переменная fruit со значением "apple"

let fruitUpper = fruit.toUpperCase(); // метод toUpperCase() преобразует строку в верхний регистр
console.log(fruitUpper); // выводим в консоль "APPLE"
let fruitLower = fruit.toLowerCase(); // метод toLowerCase() преобразует строку в нижний регистр
console.log(fruitLower); // выводим в консоль "apple"
let fruitLength = fruit.length; // метод length возвращает длину строки
console.log(fruitLength); // выводим в консоль 5
let fruitSlice = fruit.slice(1, 4); // метод slice() возвращает часть строки от 1 до 4 символа
console.log(fruitSlice); // выводим в консоль "ppl"
let fruitIndexOf = fruit.indexOf("p"); // метод indexOf() возвращает индекс первого вхождения "p" в строке

console.log(fruit[0]); // выводим в консоль "a" - первый символ строки
console.log(fruit[1]); // выводим в консоль "p" - второй символ строки
console.log(fruit.at(0)); // выводим в консоль "a" - первый символ строки
console.log(fruit.at(1)); // выводим в консоль "p" - второй символ строки
console.log(fruit[10]); // выводим в консоль "undefined" - 10 символ строки
console.log(fruit.at(10)); // выводим в консоль "undefined" - 10 символ строки

console.log(fruit.indexOf("p")); // выводим в консоль 1 - индекс первого вхождения "p" в строке
console.log(fruit.indexOf("a")); // выводим в консоль 0 - индекс первого вхождения "a" в строке

console.log("0".toLowerCase()); // выводим в консоль "0" - строка "0" в нижнем регистре
console.log("A".toLowerCase()); // выводим в консоль "a" - строка "A" в нижнем регистре

console.log(fruit.charAt(0)); // выводим в консоль "a" - первый символ строки
console.log(fruit.charAt(7), "char at"); // выводим в консоль "undefined" - 7 символ строки
console.log(fruit.charAt(0).toUpperCase()); // выводим в консоль "A" - первый символ строки в верхнем регистре

console.log(fruit.charCodeAt(0)); // выводим в консоль 97 - код первого символа строки
console.log(fruit.charCodeAt(1)); // выводим в консоль 112 - код второго символа строки

// useful methods
// "pine" + "apple" = "pineapple"
// concat() - метод, который объединяет строки
const pine = "pine"; // переменная pine со значением "pine"
if (pine) { // если pine не пустая строка
    console.log("pine is not empty"); // выводим в консоль "pine is not empty"
}
const pineapple = "pine".concat(fruit); // метод concat() объединяет строки
console.log(pineapple); // выводим в консоль "pineapple" - объединение строк 

const email = " john@gmail.com";
console.log(email); // выводим в консоль как есть с пробелом
// trim() - метод, который удаляет пробелы в начале и конце строки
console.log(email.trim()); // выводим в консоль без пробелов 
console.log(email.trim().toLowerCase()); // выводим в консоль без пробелов и в нижнем регистре
console.log(email.trim().toLowerCase().charAt(0)); // выводим в консоль первый символ строки в нижнем регистре
console.log(email.indexOf("@")); // выводим в консоль индекс символа "@" в строке
console.log(email.indexOf("$")); // выводим в консоль -1 - символ "$" не найден в строке

console.log(email.trimStart()); // выводим в консоль c
console.log(email.trimEnd()); // выводим в консоль c пробелом в конце строки
console.log(email.trimStart().trimEnd()); // выводим в консоль без пробелов в начале и конце строки

//padStart() - метод, который добавляет пробелы в начале строки
const cake = "Cake"; // переменная cake со значением "Cake"
console.log(cake.padStart(10)); // выводим в консоль "      Cake" - добавляем пробелы в начале строки
console.log(cake.length); // выводим в консоль 4 - длина строки
console.log(cake.padStart(10).length); // выводим в консоль 10 - длина строки с пробелами
console.log(cake.padEnd(10)); // выводим в консоль "Cake      " - добавляем пробелы в конце строки
console.log(cake.padStart(10, "*")); // выводим в консоль "******Cake" - добавляем символ "*" в начале строки

// slice() - метод, который возвращает часть строки от 1 до 4 символа
const sliceOfCake = cake.slice(3); // переменная sliceOfCake со значением "e"
console.log(sliceOfCake); // выводим в консоль "e" - часть строки от 3 до конца
console.log(cake.slice(0)); // выводим в консоль "Cake" - часть строки от 0 до конца
console.log(cake.slice(1)); // выводим в консоль "ake" - часть строки от 1 до конца
console.log(cake.slice(1, 3)); // выводим в консоль "ak" - часть строки от 1 до 3 первый индекс не включительно
console.log(cake.slice(-2)); // выводим в консоль "ke" - часть строки от -2 до конца
console.log(cake.slice(-2, -1)); // выводим в консоль "k" - часть строки от -2 до -1 первый индекс не включительно

console.log("курочка".slice(-2)); // выводим в консоль "ка" - часть строки от -2 до конца
console.log("курочка".slice(-2, -1)); // выводим в консоль "к" - часть строки от -2 до -1 первый индекс не включительно
console.log("улыбочка".slice(-2)); // выводим в консоль "ка" - часть строки от -2 до конца

// substring() - метод, который возвращает часть строки от 1 до 4 символа
const animal = "panda"; // переменная animal со значением "panda"
console.log(animal.substring(2)); // выводим в консоль "nda" - часть строки от 2 до конца
console.log(animal.substring(2, 4)); // выводим в консоль "nd" - часть строки от 2 до 4 первый индекс не включительно

console.log("курочка".substring(-2)); // выводим в консоль "курочка" - часть строки от -2 до конца

const token = "paper.bread.leaf"; // переменная token со значением "paper.bread.leaf"
const indexOfFirstDot = token.indexOf("."); // метод indexOf() возвращает индекс первого вхождения "." в cтроке
const indexOfLastDot = token.lastIndexOf("."); // метод lastIndexOf() возвращает индекс последнего вхождения "." в cтроке
console.log(indexOfFirstDot); // выводим в консоль 5 - индекс первого вхождения "." в cтроке
console.log(indexOfLastDot); // выводим в консоль 10 - индекс последнего вхождения "." в cтроке

// Напишем метод который принимает имейл и возвращает имя пользователя - это часть строки до символа "@"
// getNameFromEmail
// "alisher-khamidov@gmail.com" => "alisher-khamidov"

function getNameFromEmail(email) { // функция getNameFromEmail
    const indexOfAt = email.indexOf("@"); // метод indexOf() возвращает индекс первого вхождения "@" в cтроке
    return email.slice(0, indexOfAt); // метод slice() возвращает часть строки от 0 до индекса "@" первый индекс не включительно
} // конец функции getNameFromEmail
console.log(getNameFromEmail("alisher-khamidov@gmail.com")); // выводим в консоль "alisher-khamidov" - имя пользователя из имейла

// напишите метод getEmailService
// "alisher-khamidov@gmail.com" => "@gmail.com"
function getEmailService(email) { // функция getEmailService
    const indexOfAt = email.indexOf("@"); // метод indexOf() возвращает индекс первого вхождения "@" в cтроке
    return email.slice(indexOfAt); // метод slice() возвращает часть строки от индекса "@" до конца строки
} // конец функции getEmailService
console.log(getEmailService("alisher-khamidov@gmail.com")); // выводим в консоль "@gmail.com" - сервис из имейла

// доп задание
// учтите что с лева могут быть пробелы
// напишите метод getFirstName
// " "alisher-khamidov@gmail.com" => "alisher"
