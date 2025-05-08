// Задание 1
// У вас есть массив объектов:

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

// Создайте на основе старого массива новый массив объектов по образу:
//  [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const simplifiedCars = cars.map((car) => ({
  brand: car.brand,
  isDiesel: car.isDiesel,
}));

console.log(simplifiedCars);

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const dieselCars = cars.filter((car) => car.isDiesel);

console.log("dieselCars", dieselCars);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const nonDieselCars = cars.filter((car) => !car.isDiesel);

console.log("nonDieselCars", nonDieselCars);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const totalNonDieselPrice = cars
  .filter((car) => !car.isDiesel)
  .reduce((sum, car) => sum + car.price, 0);

console.log("Общая стоимость не дизельных машин:", totalNonDieselPrice);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.

cars.forEach((car) => {
  car.price = car.price * 1.2;
});

console.log("Стоимость + 20% ", cars);

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const updatedCars = cars.map((car) =>
  car.isDiesel ? { brand: "Tesla", price: 25000, isDiesel: false } : car
);

console.log(updatedCars);

// Общая стоимость машин Tesla
const totalTesla = updatedCars
  .filter((car) => car.brand === "Tesla")
  .reduce((sum, car) => sum + car.price, 0);

console.log("Общая стоимость машин Tesla:", totalTesla);

// Посчитать, сколько всего штук Tesla в массиве?
const teslaCount = updatedCars.filter((car) => car.brand === "Tesla").length;

console.log("Количество машин Tesla:", teslaCount);

// Хочешь, чтобы все такие результаты выводились в виде отчёта — например,
// с количеством, общей стоимостью и средней ценой Tesla?

const teslaCars = updatedCars.filter((car) => car.brand === "Tesla");

const teslaCount1 = teslaCars.length;
const teslaTotalPrice = teslaCars.reduce((sum, car) => sum + car.price, 0);
const teslaAveragePrice =
  teslaCount1 > 0 ? (teslaTotalPrice / teslaCount1).toFixed(2) : 0;

console.log("🚗 Отчёт по Tesla:");
console.log("Количество:", teslaCount1);
console.log("Общая стоимость:", teslaTotalPrice);
console.log("Средняя цена одной Tesla:", teslaAveragePrice);

// Второй вариант
function teslaReport(carsArray) {
  const teslas = carsArray.filter((car) => car.brand === "Tesla");
  const count = teslas.length;
  const totalPrice = teslas.reduce((sum, car) => sum + car.price, 0);
  const averagePrice = count > 0 ? (totalPrice / count).toFixed(2) : 0;

  console.log("📊 Отчёт по Tesla:");
  console.log(`Количество: ${count}`);
  console.log(`Общая стоимость: $${totalPrice}`);
  console.log(`Средняя цена: $${averagePrice}`);
}

teslaReport(updatedCars);
