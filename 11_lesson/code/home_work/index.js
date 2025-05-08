// tuple 

const user = {
    email: "mihajlov8@gmail.com",
}; // объект user с полем email со значением "

console.log(user.email); // выводим в консоль "

// Задание 1
// Создайте метод который принимает массив и возврашает новый! массив с теми же данными, но первый и последний элементы в массиве должны быть поменяны местами.

// Исходный массив должен остаться неизмененным после вызова метода.

const animals = ["cat", "dog", "fish", "bird"]; // массив animals с элементами "cat", "dog", "fish", "bird"
const newAnimals = [...animals]; // создаем новый массив newAnimals с теми же элементами, что и в animals

function swapFirstAndLast(arr) { // функция swapFirstAndLast принимает массив arr
    const newArr = [...arr]; // создаем новый массив newArr с теми же элементами, что и в arr
    const firstElement = newArr.shift(); // удаляем первый элемент из newArr и сохраняем его в переменную firstElement
    const lastElement = newArr.pop(); // удаляем последний элемент из newArr и сохраняем его в переменную lastElement
    newArr.unshift(lastElement); // добавляем последний элемент в начало нового массива newArr
    newArr.push(firstElement); // добавляем первый элемент в конец нового массива newArr
    return newArr; // возвращаем новый массив newArr
} // конец функции swapFirstAndLast
console.log(swapFirstAndLast(animals)); // выводим в консоль новый массив с поменянными местами первым и последним элементами
console.log(animals); // выводим в консоль исходный массив animals, который остался неизменным

// desctructuring - деструктуризация
const numbers = [1, 2, 3, 4, 5]; // массив numbers с элементами 1, 2, 3, 4, 5
const [first, second, ...rest] = numbers; // деструктурируем массив numbers на переменные first, second и rest
console.log(first); // выводим в консоль 1 - первый элемент массива
console.log(second); // выводим в консоль 2 - второй элемент массива
console.log(rest); // выводим в консоль [ 3, 4, 5 ] - оставшиеся элементы массива
console.log(numbers); // выводим в консоль [ 1, 2, 3, 4, 5 ] - исходный массив numbers

// деструктуризация объекта
const admin = {
    email: "mihajlov@gmail.com",
    age: 31,
    firstName: "Alisher",
    secondName: "Khamidov",
}; // объект admin с полями email, age, firstName, secondName
// const email = admin.email; // деструктурируем объект admin на переменную email

const {age, secondName } = admin; // деструктурируем объект admin на переменные email, age, firstName, secondName
console.log(age, secondName); // выводим в консоль "

const catPerson = {
    name: "Annamay",
    cats: ["Tom", "Garfield", "Barsik"],
} // объект catPerson с полями name и cats

console.log(catPerson); // выводим в консоль объект catPerson
console.log(catPerson.name); // выводим в консоль "Annamay" - имя человека

const {cats: [,Garfield]} = catPerson; // деструктурируем объект catPerson на переменные name и cats, при этом cats - это массив, из которого мы берем только второй элемент (Garfield)
// const Garfield = catPerson.cats[1]; // получаем второй элемент массива cats из объекта catPerson
console.log(Garfield); // выводим в консоль "Garfield" - второй кот 


// Задание 
// 2, John, isDrunk
// Получить в отдельные переменные
// const arr = [[1,2,3], ["Igor", "John","Bob"], {isDrunk: true}]; // массив arr с элементами [1,2,3], ["Igor", "John","Bob"], {isDrunk: true}
// const [numbers, names, {isDrunk}] = arr; // деструктурируем массив arr на переменные numbers, names и isDrunk

// Задание 2
// Создайте метод который принимает массив строк, ничего не возвращает.
// Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.

function capitalize(word) {
    if (word && word.length > 2) {
      return word.at(0).toUpperCase() + word.slice(1);
    } else {
      throw new Error("Invalid argument");
    }
  }

console.log(capitalize("hello")); // выводим в консоль "Hello" - строка с первой буквой в верхнем регистре и остальными буквами в нижнем регистре

function capitalizeFirstElement(arr) {
    if (arr.length) {
      arr[0] = capitalize(arr[0]);
    }
  }
  
  const fruits = ["asd", "asdasdsa"];
  capitalizeFirstElement(fruits);
  console.log(fruits);
