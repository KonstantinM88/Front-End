const wort = "1998-hjklw:John";

const notDigit = /[^0-9]/; // то есть если каретка находится
//  в квадратных скобках - она обозначает отрицание
const digit = /\d/; // одна цифра
const notDigitVer2 = /\D/; // одна цифра

const letter = "9";

console.log(digit.test(letter)); // true

// [0-9] === \d
// [^0-9] === \D
// [a-z] === \w
// [^a-z] === \W
// [a-zA-Z] === \w
// [^a-zA-Z] === \W
// \s === [\t\n\f\r] (пробелы)
// \S === [^\t\n\f\r] (не пробелы)
const fullName = "John Bowie";

const regex2 = /John\sBowie/;

console.log(regex2.test(fullName)); // true
const regex3 = /John\sBowie/;








// Символы которые показывают количество называются квантификаторы
// ? - один или ноль раз
// * - ноль или много раз
// + - один или много раз
// - ноль или один раз
const cameraModel = "Canon 5R";
const cameraModel2 = "Canon 5RD";
const cameraModel3 = "Canon 12RD";
const cameraModel4 = "Canon 1200RD";
// сделаем выражение, которое бы подошло под оба варианта
const regex5 = /Canon \d\d?RD?/; // ? - один или ноль раз
console.log(regex5.test(cameraModel)); // true
console.log(regex5.test(cameraModel2)); // true 
console.log(regex5.test(cameraModel3)); // true
console.log(regex5.test(cameraModel4)); // false

// * - ноль или много раз
// const regex6 = /\d*\/;
// console.log(regex6.test(cameraModel)); // true

// Группировка
// () - группировка
// | - или
const text = "I am programmer but yuo can never say. I am sure";
const regex7 = /(I) (am)/gi;
console.log(text.replace(regex7, "$2 $1")); // am I am programmer but yuo can never say. am I am sure
// $1 - это первая группа, $2 - это вторая группа
// $3 - это третья группа и так далее

const phonNumber = "0151 52466512";
// +49 (151) 52466512

const phoneRegex = /0(\d{3})\s(\d{3})(\d{3})(\d{2})/;

phonNumber.replace(phoneRegex, "+49 ($1) $2-$3-$4");
console.log(phonNumber.replace(phoneRegex, "+49 ($1) $2-$3-$4")); // +49 (151) 524-665-12

const maskedPhone = phonNumber.replace(phoneRegex, "+49 ($1) $2-$3-$4");
console.log(maskedPhone); // +49 (151) 524-665-12

// Code /Wars 8 javascript
// https://www.codewars.com/kata/5a3fe3dde1ce0e8b9f000112/train/javascript

// Leet code - Java,Javascript
// https://leetcode.com/problems/valid-anagram/
