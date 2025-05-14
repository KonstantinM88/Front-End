const formElement = document.getElementById("form");
const listElement = document.getElementById("persons-list");
const clearBtnElement = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one");

// Сначала мы получаем ссылки на несколько элементов HTML с помощью метода getElementById:
// formElement - это форма с идентификатором "form".
// listElement - это список (вероятно, <ul>) с идентификатором "persons-list".
// clearBtnElement - это кнопка с идентификатором "clear".
// clearOneBtnElement - это кнопка с идентификатором "clear-one".


const persons = []; // Массив для хранения объектов Person
// Создается пустой массив persons,
//  в котором будут храниться данные о людях, которые будут добавляться через форму.

const clearList = function () {
    while (listElement.hasChildNodes()) { // Пока в списке есть дочерние элементы
        listElement.firstChild.remove(); // Удаляем первый дочерний элемент списка
    }
}

    const clearOne = function () {
        if (listElement.hasChildNodes()) { // Если в списке есть дочерние элементы
            listElement.firstChild.remove(); // Удаляем первый дочерний элемент списка
        }
    }
// clearOne удаляет первый элемент из списка listElement.
// Этот фрагмент кода определяет функцию с именем ClearOne в JavaScript.
// Функция проверяет, имеет ли элемент DOM с идентификатором ListElement какие-либо дочерние узлы.
// Если это произойдет, первый дочерний узел будет удален из элемента.


function clearInputs(event) {
    event.target.nickname.value = ""; // Очищаем поле ввода с именем "nickname"
    event.target.place.value = ""; // Очищаем поле ввода с именем "place"
}
// Функция clearInputs(event) используется для очистки полей ввода формы
// Она получает объект события event и обнуляет значения полей формы "nickname" и "place".

function changeStatus(event) {
    if (event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "none"; // Убираем зачеркивание
    } else {
        event.target.style.textDecoration = "line-through"; // Добавляем зачеркивание
    }
}
// Функция changeStatus(event) изменяет стиль элемента, на который кликнули.
//  Если у элемента уже есть стиль "textDecoration" с значением "line-through",
// то этот стиль убирается, иначе он добавляется, что создает эффект зачеркивания текста.

clearBtnElement.addEventListener("click", function () {
    clearList(); // Вызываем функцию для очистки списка
    clearInputs(event); // Вызываем функцию для очистки полей ввода
});
clearOneBtnElement.addEventListener("click", function () {
    clearOne(); // Вызываем функцию для очистки одного элемента списка
    clearInputs(event); // Вызываем функцию для очистки полей ввода
});

// Добавляются слушатели событий на кнопки:
// clearBtnElement - при клике на кнопку "clear" вызывается функция clearList.
// clearOneBtnElement - при клике на кнопку "clear-one" вызывается функция clearOne.

formElement.addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const personss = {
        name: event.target.nickname.value, // Получаем значение поля "nickname"
        place: event.target.place.value, // Получаем значение поля "place"
    }
    // Данные из формы извлекаются и сохраняются в объект person.
  //  Этот объект имеет два свойства: "name" и "place",
  // которые содержат данные из соответствующих полей формы.
  persons.push(personss); // Добавляем объект person в массив persons
    // Объект person добавляется в массив persons, который хранит всех людей.
    const liElement = document.createElement("li"); // Создаем новый элемент списка
    liElement.textContent = `${personss.name} (${personss.place})🤔`; // Устанавливаем текст элемента списка
    liElement.onclick = changeStatus; // Добавляем обработчик события клика

    listElement.appendChild(liElement); // Добавляем элемент списка в ul
    clearInputs(event); // Очищаем поля ввода

})