// Мы можем создавать элементы с нуля и прикреплять их к документу Html
// Создадим пустой элемент p

const newElement = document.createElement('p'); // создаем элемент p
newElement.textContent = "Я БЫЛ СОЗДАН ПРИ ПОМОЩИ JS"; // добавляем текст в элемент
newElement.style.border = "2px solid red"; // добавляем рамку к элементу
document.body.append(newElement); // добавляем элемент в конец body
// Метод append() в JavaScript используется для добавления элементов (или текста) внутрь другого элемента на странице.

const targetElement = document.getElementById('target-element'); // получаем элемент, к которому будем прикреплять новый элемент
const newBtn = document.createElement('button'); // создаем элемент button
newBtn.type = "button"; // задаем тип кнопки
newBtn.textContent = "Нажми на меня"; // добавляем текст в кнопку
targetElement.append(newBtn); // добавляем кнопку в элемент target-element
