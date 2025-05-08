function addPrefix(words, prefix) {
    return words.map(word => prefix + word);
}

// Пример использования:
const originalArray = ["apple", "orange"];
const newArray = addPrefix(originalArray, "pine");

console.log(newArray);       // ["pineapple", "pineorange"]
console.log(originalArray);  // ["apple", "orange"] — остался без изменений
