// Regular expression это регулярное выражение
// RegExp это объект, который позволяет работать с регулярными выражениями
// RegExp - это встроенный объект в JavaScript, который позволяет работать с регулярными выражениями

// Найти фрагмент строки, подходящий под описание
// Можем все вхождения на какую-нибудь другую строку
// Проверить ли соответствует ли строка шаблону - валидации
// Регулярные выражения - это шаблоны, которые используются для поиска и замены текста
// Регулярные выражения - это мощный инструмент для работы с текстом

const text1 = 'Hello, Alisher! oh, Anna, you are also here, well hello there!'; 

console.log(text1.match(/Hello/));
 // [ 'Hello', index: 0, input: 'Hello, Alisher! oh, Anna, you are also here, well hello there!' ]

 console.log(text1.match(/Hello/, "Good day")); 

 // Что такое флаги? i,g,m,y
// i - игнорировать регистр
// g - глобальный поиск
// m - многострочный поиск
// y - поиск с позиции последнего совпадения
const text2 = "Apple, Orange apple  Orange apple  Orange apple";
const newText2 = text2.replace(/apple/gi, "banana");
console.log(newText2); // Apple, Orange banana  Orange banana  Orange banana

console.log(text2.replace(/apple/g, "banana")); // Apple, Orange banana  Orange banana  Orange banana
// console.log(text2.replace(/apple/i, "banana")); // Apple, Orange banana  Orange apple  Orange apple
// console.log(text2.replace(/apple/m, "banana")); // Apple, Orange banana  Orang
console.log(text2.replace(/apple/gi, "banana")); // Apple, Orange banana  Orange banana  Orange banana
// console.log(text2.replace(/apple/y, "banana")); // Apple, Orange banana  Orange apple  Orange apple
// console.log(text2.replace(/apple/gim, "banana")); // Apple, Orange banana  Orange banana  Orange banana
// console.log(text2.replace(/apple/gim, "banana")); // Apple, Orange banana  Orange banana  Orange banana
// Хочу проверить, что выражение состоит из буквы и нескольких чисел

// a87
// b675
// c99

// x88y - не подходит
const code = "a87";

console.log(code.match(/^[a-zA-Z]\d{2,3}$/)); // [ 'a87', index: 0, input: 'a87' ]
// ^ - начало строки
// $ - конец строки
// \d - цифра
// {2,3} - от 2 до 3 цифр
// [a-zA-Z] - буква
// . - любой символ
// \w - буква, цифра, знак подчеркивания
// \s - пробел
// \D - не цифра
// \W - не буква, не цифра, не знак подчеркивания
// \S - не пробел
// \b - граница слова
// \B - не граница слова
// \n - новая строка
// \t - табуляция
// \r - возврат каретки 
// \f - перевод страницы
// \v - вертикальная табуляция
// \0 - нулевой символ
// \x - символ в шестнадцатеричном формате
// \u - символ в юникоде
// \c - управляющий символ

// а если мне нужно найти точку как знак препинания
// то я могу использовать \. - точка
// aaa.aaa.aaa

const exaple4 = "aaa.aaa.aaa";
// экраниоровать точку с помощью обратного слэша
console.log(exaple4.match(/aaa\.aaa\.aaa/)); // [ 'aaa.aaa.aaa', index: 0, input: 'aaa.aaa.aaa' ]
// или же использовать \w - буква, цифра, знак подчеркивания
console.log(exaple4.match(/^\w+\.\w+\.\w+$/)); // [ 'aaa.aaa.aaa', index: 0, input: 'aaa.aaa.aaa' ]

// Как обозначить буквенные символы

// Хочу, чтобы слово начиналось с буквы h, l или b?
// hate, late,bate - ok
// wate, hate не подходит
const exaple5 = "hate";
console.log(exaple5.match(/^[hlb]ate/)); // [ 'hate', index: 0, input: 'hate' ]
// [hlb] - любой из символов h, l, b
console.log(exaple5.match(/[hlb]ate/)); // [ 'hate', index: 0, input: 'hate' ]
// [^hlb] - любой символ, кроме h, l, b
// [a-z] - любой символ от a до z
const wort = "F6mv"; // ok
console.log(wort.match(/^F[a6].[a-z]/)); // [ 'F6m', index: 0, input: 'F6mv' ]
// [a-zA-Z] - любой символ от a до z и от A до Z