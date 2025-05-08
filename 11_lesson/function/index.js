// call
sayHi();
// hoisting = поднятие
// когда вызов может быть раньше в коде, чем сама декларация функции

// functional declaration
function sayHi() {
    console.log("Hi!");
}

console.log(x); // hosting var без инициализации - только объявление
var x = 10;
// const и let так не работают!

// sayGoodbye(); // не сработает hoisting

// FUNCTIONAL 


// сосед
function neighbour(action, thing) {
    action(thing);
  }
  
  const party = function (track) {
    console.log("Tuc-tuc-tuc " + track);
  };
  
  const drill = function (item) {
    console.log("I drill " + item);
  };
  
  neighbour(party, "Britney Spears");
  neighbour(party, "Ramstein");
  neighbour(drill, "wall");

  // Пример калькулятор
  // calculator(add, 9, 7)
  // calculator(devide, 12, 4)

  function calculator(operation, a, b) {
   return operation(a,b);
  }

  function add(a,b) {
    return a + b;
  }

  function devide(a,b) {
    return a / b;
  }

  console.log(calculator(add,9,7));
  console.log(calculator(devide, 12,4));

  // anonymus function - анонимная функция

  // пример с вычитанием
 const res = calculator(function(a,b){return a-b}, 9, 4);
 console.log(res);

 const res2 = calculator((a,b)=> a-b, 9,4);

 // arrow function - стрелочная функция
 // умножение
 const multiply = (a,b) => a * b; // стрелочная функция без тела

 const multiply2 = (a,b) => {
    return a * b;
 };
 
 // стрелочную функция, которую передали в качестве параметра в другую называется
 // колбеком
 // Возведение в степень а возвести в степень b
 const power = (a,b) => a ** b;
 const twoInPowerOfThree = calculator(power, 2, 3);
 console.log(twoInPowerOfThree); //8

// pirate

function pirate(operation, item) {
    operation(item);
  }
  
  const drinkSmth = (a) => {
    console.log("I drink " + a);
  };
  pirate(drinkSmth, "rom");
  pirate(drinkSmth, "water");

  const swim = (vehicle) => {
    console.log("I roam ses in my " + vehicle)
  };

  pirate(swim, "ship");
  pirate(drinkSmth, "rom");
  pirate(swim, "barrel");




