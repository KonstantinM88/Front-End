// Задание 1
// Создайте метод, который принимает объект, а возврщает новый объект, в котором ключи и значения поменялись местами.

// {name: "Bob"} --> {"Bob": "name"}

// (вам понабится поработать с Object.values, Object.keys )
function invertObject(obj) {
    const inverted = {};
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    for (let i = 0; i < keys.length; i++) {
        inverted[values[i]] = keys[i];
    }

    return inverted;
}
const original = { name: "Bob"};
const result = invertObject(original);

console.log(result); 