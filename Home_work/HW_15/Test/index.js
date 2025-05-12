// Заголовок
const title = document.createElement('h1');
title.textContent = 'Добавить животное';
title.style.fontFamily = 'Arial, sans-serif';
title.style.color = '#333';
document.body.appendChild(title);

// Форма
const form = document.createElement('form');
form.id = 'animal-form';
form.style.border = '2px solid #4CAF50';
form.style.borderRadius = '10px';
form.style.padding = '20px';
form.style.marginBottom = '20px';
form.style.maxWidth = '400px';
form.style.backgroundColor = '#f9f9f9';
form.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
document.body.appendChild(form);

// Поля формы
const nicknameInput = createInput('Кличка (nickname):', 'nickname', 'text');
const ageInput = createInput('Возраст (age):', 'age', 'number');
const breedInput = createInput('Порода (breed):', 'breed', 'text');

// Кнопка
const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Добавить животное';
button.style.padding = '10px 15px';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.cursor = 'pointer';
button.style.marginTop = '10px';

// Добавление в форму
form.append(nicknameInput, ageInput, breedInput, button);

// Заголовок списка
const listTitle = document.createElement('h2');
listTitle.textContent = 'Список животных:';
document.body.appendChild(listTitle);

// Список
const animalList = document.createElement('ul');
animalList.id = 'animal-list';
animalList.style.border = '1px solid #ccc';
animalList.style.borderRadius = '8px';
animalList.style.padding = '15px';
animalList.style.maxWidth = '400px';
animalList.style.backgroundColor = '#fff';
animalList.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
document.body.appendChild(animalList);

// Обработка отправки формы
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nickname = document.getElementById('nickname').value.trim();
    const age = document.getElementById('age').value.trim();
    const breed = document.getElementById('breed').value.trim();

    if (nickname && age && breed) {
        const li = document.createElement('li');
        li.textContent = `Кличка: ${nickname}, Возраст: ${age}, Порода: ${breed}`;
        li.style.padding = '8px 0';
        li.style.borderBottom = '1px solid #eee';
        animalList.appendChild(li);
        form.reset();
    }
});

// Функция для создания поля формы
function createInput(labelText, id, type) {
    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '10px';

    const label = document.createElement('label');
    label.textContent = labelText;
    label.style.display = 'block';
    label.style.marginBottom = '5px';

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.required = true;
    input.style.width = '100%';
    input.style.padding = '8px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '5px';
    input.style.boxSizing = 'border-box';

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    return wrapper;
}
