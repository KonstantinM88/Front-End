const drinks = [
    { name: "Bloody Mary", strength: 14, price: 7 },
    { name: "Jin", strength: 25, price: 4 },
    { name: "Beer", strength: 7, price: 3.5 },
    { name: "Cider", strength: 2, price: 5 },
    { name: "Beer", strength: 7, price: 5 },
  ];


  // Задание 1
// Найдите индекс Jin 
// Замените Jin на объект "Tequilla"

const jinIndex = drinks.findIndex(drink => drink.name === "Jin");
console.log(jinIndex);
if (jinIndex !== -1) {
    drinks.splice(jinIndex, 1, { name: "Tequilla", strength: 40, price: 6 });
}
console.log(drinks);

// Задание 2 
// Сделайте все напитки в масиве крепче на 1 градус
drinks.forEach(drink => {
    drink.strength += 1;
});
console.log(drinks);

// Задание 3
// Посчитайте стоимость всех напитков
console.log(drinks.reduce((sum, d) => sum + d.price, 0));

// стоимость всех напитков пиво используя filter
const beerTotal = drinks
  .filter(drink => drink.name === "Beer")
  .reduce((sum, drink) => sum + drink.price, 0);

console.log("Общая стоимость Beer:", beerTotal);
// в одну строку
console.log(drinks.filter(d => d.name === "Beer").reduce((sum, d) => sum + d.price, 0));

// 1
const indexOfJin = drinks.findIndex((drink) => drink.name === "Jin");
console.log(indexOfJin);

drinks.splice(indexOfJin, 1); // удалили по индексу
console.log(drinks);

// 2
drinks.forEach((drink) => drink.strength++);
console.log(drinks);

// 3
const totalBeerPrice = drinks.reduce((acc, drink) => {
  if (drink.name === "Beer") {
    return acc + drink.price;
  }
  return acc;
}, 0);

console.log(totalBeerPrice);  // 8.5

