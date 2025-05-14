// Задание 1 — Форматирование строки
// Создайте функцию, которая принимает строку в формате вида "1333.132.123 00" — числа могут быть любыми, но структура такая же: три группы, разделённые точками и пробелом.

// Цель: преобразовать строку к следующему формату: 📌 "1333 132:123-00"
function formatString(input) {
    // Ваша реализация здесь
    const regex = /(\d+)\.(\d+)\.(\d+) (\d+)/;
    const match = input.match(regex);
    if (match) {
        const formattedString = `${match[1]} ${match[2]}:${match[3]}-${match[4]}`;
        return formattedString;
    }
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"


// 📘 Задание 2 — Промис с рандомной ошибкой
// Создайте Promise, который с одинаковой вероятностью (50/50):

// либо возвращает строку "Best day of my life"
// либо выбрасывает ошибку с сообщением "Something is off"
// Затем обработайте результат с помощью .then() и .catch().
function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() < 0.5; // 50% вероятность успеха
        setTimeout(() => {
            if (isSuccess) {
                resolve("Best day of my life");
            } else {
                reject(new Error("Something is off"));
            }
        }, 1000);
    });
}
randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });
