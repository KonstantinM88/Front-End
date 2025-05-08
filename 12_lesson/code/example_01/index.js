// Object
// key - value

const user = { email: "john@gmail.com" };
const age = 18;

// user = { email: "bob@gmail.com"}; //ошибка

// изменил значение свойства объекта
user.email = "john2@yahoo.org";

console.log(user);

// как  добавить в объект новое свойство
user.eyeColor = "brown";

console.log(user);

// "hair color" - так делать не стоит
user["hair color"] = "yellow"; // box syntax

console.log(user);
const { "hair color": hairColor } = user; // деструктуризация, если с пробелом

console.log(hairColor);

// Пример того как можно создавать объект из переменных

const pandaName = "Po";
const favouriteFood = "bamboo";

const panda = {
  name: pandaName,
  favouriteFood, // schort syntax - если имя переменной совпадает с ключем, который мы хотим вывести
};

console.log(panda);

// Создайте переменную рост
// копировать с урока!!!!!!!!

// Object create - может создавать объекты
const musician = Object.create({ name: "Freddie Mercury" });
console.log(musician); // {}
console.log(musician.name); // Freddie Mercury

const address = {
  street: "Pfondorfer",
  number: 12,
};

const firma = {
    title: "Horns and hoofs",
}

Object.assign(firma, address); // 

// аналог того же самого это spread operator, но немного иначе

const personalInfo = {
    name: "Fedor",
  };
  
  const medicalInfo = {
    bloodType: 1,
  };
  
  const fedor = {
    ...personalInfo,  // скопировали поля из объекта personalInfo
    ...medicalInfo,   // скопировали поля из объекта medicalInfo
    age: 19,          // указали ручками ключ значение
  };
  
  console.log(fedor);

  //создайте метод который принимает объект и два параметра типа строка
  // первый из них это будущий ключ, второй - будущее значение
  //пусть метод возвращает объект с добавлением указанного поля со значением
  //unify({email: "bob@gmail.com"}, eyeColor, "brown") 
  // ---> {email: "bob@gmail.com", eyeColor:"brown"}

//   function unify(obj, key, value) {
//     obj[key] = value;
//     return obj;
// }

// // Пример использования:
// const user1 = { email: "bob@gmail.com" };
// const updatedUser = unify(user, "eyeColor", "brown");

// console.log(updatedUser); // { email: 'bob@gmail.com', eyeColor: 'brown' }
// console.log(user1);        // тоже будет { email: 'bob@gmail.com', eyeColor: 'brown' }

// function unify(obj. additionalKey,additionalValue) {
//     obj [additionalKey] = additionalValue;
//     return obj;
// }

// const book = { title: "The Lord Of The Rings" };

// const newBook = unify(book, "author", "Tolkien JR");

function unify(obj, additionalKey, additionalValue) {
    const newObj = {...obj};
    newObj[additionalKey] = additionalValue;
    return newObj;
  }
  
  const book = { title: "The Lord Of The Rings" };
  
  const newBook = unify(book, "author", "Tolkien JR");
  
  newBook.title = "Harry Potter";
  console.log(newBook);
  console.log(book);

