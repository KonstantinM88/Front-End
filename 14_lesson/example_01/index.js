const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

// reserve - мутирующий! Но возвращает ссылку на исходный массив

const newCar = cars.reverse();

console.log(newCar);
console.log(cars);

// sort

const parts = ["air filter", "tires", "spark plugs", "accumulator"];

parts.sort();

console.log(parts); // по умолчанию по алфавиту сортирует

const nums = [1, 4, 2, 10, 12];

nums.sort();
console.log(nums); //[ 1, 10, 12, 2, 4 ] - отсортировал как строку

// -1,0,1

// сортировка чисел
nums.sort((a, b) => a - b);
console.log(nums); // [ 1, 2, 4, 10, 12 ]

nums.sort((a, b) => b - a);
console.log(nums); //[ 12, 10, 4, 2, 1 ]

parts.sort((a, b) => b.localeCompare(a));
console.log(parts); //[ 'tires', 'spark plugs', 'air filter', 'accumulator' ]

cars.sort((a, b) => a.price - b.price);
console.log(cars); // отсортировали по цене

// сравнение по нескольким параметрам
// сначала сравним по цене
// если цена совпадает, то сортируем уже по названию - по алфавиту

const compareCars = (a, b) => {
    const priceComparisonResult = a.price - b.price;
    if (priceComparisonResult === 0) {
      // проверяем по алфавиту
      return a.brand.localeCompare(b.brand);
    }
    return priceComparisonResult;
  };
  
  cars.sort(compareCars);
  
  console.log(cars);

