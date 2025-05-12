// Создаём заголовок
const title = document.createElement('h1'); // Создаём элемент заголовка
title.textContent = 'Добавить животное';
document.body.appendChild(title);

// Создаём форму
const form = document.createElement('form');
form.id = 'animal-form';

// Поля ввода
const nicknameInput = createInput('Кличка (nickname):', 'nickname', 'text');
const ageInput = createInput('Возраст (age):', 'age', 'number');
const breedInput = createInput('Порода (breed):', 'breed', 'text');

// Кнопка
const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Добавить животное';

// Добавляем всё в форму
form.append(nicknameInput, ageInput, breedInput, button);
document.body.appendChild(form);

// Список животных
const listTitle = document.createElement('h2');
listTitle.textContent = 'Список животных:';
const animalList = document.createElement('ul');
animalList.id = 'animal-list';

document.body.append(listTitle, animalList);

// Обработка формы
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nickname = document.getElementById('nickname').value.trim();
    const age = document.getElementById('age').value.trim(); 
    const breed = document.getElementById('breed').value.trim();

    if (nickname && age && breed) {
        const li = document.createElement('li');
        li.textContent = `Кличка: ${nickname}, Возраст: ${age}, Порода: ${breed}`;
        animalList.appendChild(li);
        form.reset();
    }
});

// Вспомогательная функция для создания полей формы
function createInput(labelText, id, type) {
    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.required = true;

    label.appendChild(document.createElement('br')); // Добавляем перенос строки
    label.appendChild(input);
    label.appendChild(document.createElement('br'));
    label.appendChild(document.createElement('br'));

    return label;
}
