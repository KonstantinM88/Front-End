// Array.prototype

// push, pop, shift, unshift - мутирующие методы
// at - аналог бокс синтаксиса
const fruits = ["apple", "orange", "grape"];

console.log(fruits.at(0));
console.log(fruits.at(-1));

// map
// создает новый массив и не мутирует исходный
const fruitsUpper = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitsUpper);

const fruitLengthes = fruits.map((fruit) => fruit.length);
console.log(fruitLengthes); // [5,6,5];

// pipeline
// ["5", "6", "5" ]
const strArr = fruits.map((fruit) => fruit.length.toString());
console.log(strArr);

// Пример использования с массивом объектов
const animals = [
  { name: "Po", specie: "panda", weight: 300 },
  { name: "Tigrica", specie: "tiger", weight: 250 },
  { name: "Kovalsky", specie: "penguin", weight: 5 },
  { name: "Melman", specie: "giraffe", weight: 600 },
];

// const americanAnimals = animals.map((animal) => (animal.weight *= 1.3));
const americanAnimals = animals.map((animal) => ({
  ...animal,
  weight: animal.weight * 1.3,
}));

const foo1 = (a) => {
  return a;
};
const foo2 = (a) => a;
console.log(animals);
console.log(americanAnimals);

const animalsNames = animals.map((animal) => animal.name);
console.log(animalsNames); // [ 'Po', 'Tigrica', 'Kovalsky', 'Melman' ]

// Если мы хотим изменить исходный массив - элементы в нем, то лучше воспользоваться
// методом  forEach
// метод можно использовать, чтобы выполнить операции с каждым из элементов

// Добавим в каждый объект исходного массива новое поле
// то есть мутируем каждое животное
// isHealthy true

animals.forEach((animal) => {
  animal.isHealthy = true;
});
console.log(animals); //  { name: 'Po', specie: 'panda', weight: 300, isHealthy: true }

// reduce
// Мы решили отвезти на автобусную экскурсию
// грузоподьемность автобуса 2500 кг
// Сможем ли мы поместить животных в автобус

let acc = 0;
for (let i = 0; i < animals.length; i++) {
  acc += animals.at(i).weight;
}
console.log(acc);

const totalWeight = animals.reduce((acc, current) => acc + current.weight);

// acc 0 current 300 = 0 + 300
// acc 300 currnt 250 = 300 + 250
console.log(totalWeight);

const dishes = [
  { name: "bamboo", calories: 500 },
  { name: "meat", calories: 1600 },
  { name: "fish", calories: 1000 },
];

// какая калорийнсть всех блюд? используя reduce

// const totalCalories = dishes.reduce((sum, dish) => {
//     return sum + dish.calories;
// }, 0);
const totalCalories = dishes.reduce((sum, dish) => sum + dish.calories, 0);

console.log("Общая калорийность:", totalCalories); // 3100
// в тройном размере от исходной
console.log(
  "Общая калорийность в тройном размере:",
  dishes.reduce((sum, dish) => sum + dish.calories, 0) * 3
); //9300

// join

const fruitsCoctail = fruits.join("-");
console.log(fruitsCoctail); //apple-orange-grape

// split
const ensurance = "123.128.12412312";
const numsAsStrings = ensurance.split("."); // dilimeter - разделитель - символ, который отделяет друг от друга
console.log(numsAsStrings); // [ '123', '128', '12412312' ]

const nums = numsAsStrings.map((elenent) => Number(elenent));
console.log(nums); //[ 123, 128, 12412312 ]

// Пингвин заболел
// Найдём пингвина и заразим
animals.forEach((animal) => {
  if (animal.specie === "penguin") {
    animal.isHealthy = false;
  }
});
console.log(animals);

// к нам пришла инспекция
// Есть ли в нашем зоопаке больное животное
// Есть ли больные? true || false
// some - будет возвращать истину если предикат выполняется хотя бы у одного
const isQuaranteen = animals.some((animal) => animal.isHealthy === false);
console.log(isQuaranteen); // true

// Болеют ли все животные?
// every - будет возвращать истину если предикат выполняется для всех
const isEmidemy = animals.every;

// hasKiller
const hasKiller = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);
console.log(hasKiller);
// к нам  забрался киллер
animals.push({ name: "Killer", specie: "tiger", weight: 400 });

//

// Как найти и получить элемент удовлетворяющий условию
// find

// Животное с именем киллер
const killer = animals.find((animal) => animal.name === "Killer");
console.log(killer); // { name: 'Killer', specie: 'tiger', weight: 400 }

// как найти индекс элемента удовлетворяющего условию
const indexOfKiller = animals.findIndex((animal) => animal.name === "Killer");
console.log(indexOfKiller);

const indexOfPanda = animals.lastIndexOf((animal) => (animal.name = "Po"));

// slice

// создаёт копию из исходного массива. Указываем с какого индекса по какой
// первый параметр показывает начало - включительно
// третий - необязательный параметр

// splice
// мутирующий

const monthes = ["Jenuary", "Fabruery", "March", "April"];
// можно указать элементы которые мы хотим подставить вместо вырезанного куска
const removedMonthes = monthes.splice(2, 2, "July", "August"); //Мутирует исходный массив
console.log(monthes);
console.log(removedMonthes); //[ 'March', 'April' ]

const chars = ["@", "@", "@", "*", "*", "$"];
// "*" хочу заменить на "#""
const sustitutes = ["#", "#"];
chars.splice(3,2, ...sustitutes);
console.log(chars); //[ '@', '@', '@', '#', '#', '$' ]

// findIndex, splice

animals.splice(indexOfKiller, 1); // убрали элемент по индексу
console.log(animals);


