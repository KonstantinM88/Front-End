// Заголовок
const title = document.createElement('h1'); // Создаём элемент заголовка
title.textContent = 'Добавить животное'; // Текст заголовка
title.style.fontFamily = 'Arial, sans-serif'; // Шрифт заголовка
title.style.color = '#333'; // Цвет текста
document.body.appendChild(title); // Добавляем заголовок в документ

// Форма
const form = document.createElement('form'); // Создаём элемент формы
form.id = 'animal-form'; // Задаём id формы
form.style.border = '2px solid #4CAF50'; // Зеленая рамка
form.style.borderRadius = '10px'; // Закругленные углы
form.style.padding = '20px'; // Отступы внутри формы
form.style.marginBottom = '20px'; // Отступ снизу
form.style.maxWidth = '400px'; // Максимальная ширина формы
form.style.backgroundColor = '#f9f9f9'; // Светлый фон
form.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)'; // Легкая тень
document.body.appendChild(form); // Добавляем форму в документ

// Поля формы
const nicknameInput = createInput('Кличка (nickname):', 'nickname', 'text'); // Поле ввода клички
const ageInput = createInput('Возраст (age):', 'age', 'number'); // Поле ввода возраста
const breedSelect = createBreedSelect('Порода (breed):', 'breed'); // Выпадающий список пород

// Кнопка
const button = document.createElement('button'); // Создаём элемент кнопки
button.type = 'submit'; // Задаём тип кнопки
button.textContent = 'Добавить животное'; // Текст кнопки
button.style.padding = '10px 15px'; // Отступы внутри кнопки
button.style.border = 'none'; // Убираем рамку
button.style.borderRadius = '5px'; // Закругленные углы
button.style.backgroundColor = '#4CAF50'; // Зеленый фон
button.style.color = 'white'; // Цвет текста
button.style.cursor = 'pointer'; // Курсор при наведении
button.style.marginTop = '10px'; // Отступ сверху

// Сборка формы
form.append(nicknameInput, ageInput, breedSelect, button); // Добавляем поля и кнопку в форму

// Заголовок и список
const listTitle = document.createElement('h2'); // Создаём элемент заголовка для списка
listTitle.textContent = 'Список животных:'; // Текст заголовка
document.body.appendChild(listTitle); // Добавляем заголовок в документ

const animalList = document.createElement('ul'); // Создаём элемент списка
animalList.id = 'animal-list'; // Задаём id списка
animalList.style.border = '1px solid #ccc'; // Рамка вокруг списка
animalList.style.borderRadius = '8px'; // Закругленные углы
animalList.style.padding = '15px'; // Отступы внутри списка
animalList.style.maxWidth = '400px'; // Максимальная ширина списка
animalList.style.backgroundColor = '#fff'; // Белый фон
animalList.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)'; // Легкая тень
document.body.appendChild(animalList); // Добавляем список в документ

// Обработка формы
form.addEventListener('submit', function (e) { // Добавляем обработчик события на отправку формы
    e.preventDefault(); // Отменяем стандартное поведение формы

    const nickname = document.getElementById('nickname').value.trim(); // Получаем значение поля "Кличка"
    const age = document.getElementById('age').value.trim(); // Получаем значение поля "Возраст"
    const breedSelectEl = document.getElementById('breed'); // Получаем элемент выпадающего списка "Порода"
    let breed = breedSelectEl.value; // Получаем выбранное значение из выпадающего списка

    // Если выбран пункт "Другое" — берём значение из input
    if (breed === 'Другое') { // Проверяем, выбрана ли "Другое"
        // Получаем элемент input, который находится в родительском элементе выпадающего списка
        const customBreedInput = breedSelectEl.parentElement.querySelector('input[type="text"]');
        breed = customBreedInput.value.trim(); // Получаем значение из поля ввода "Другое"
    }

    if (nickname && age && breed) { // Проверяем, что все поля заполнены
        const li = document.createElement('li'); // Создаём элемент списка
        li.textContent = `Кличка: ${nickname}, Возраст: ${age}, Порода: ${breed}`; // Заполняем текст элемента
        li.style.padding = '8px 0'; // Отступы внутри элемента
        li.style.borderBottom = '1px solid #eee'; // Легкая разделительная линия
        animalList.appendChild(li); // Добавляем элемент в список
        form.reset(); // Очищаем форму после добавления

        // Скрыть поле "другое", если оно показывалось
        const customInput = breedSelectEl.parentElement.querySelector('input[type="text"]'); // Получаем элемент "другое"
        if (customInput) customInput.style.display = 'none'; // Скрываем его
    }
});

// 📌 Вспомогательная функция: обычное поле ввода
function createInput(labelText, id, type) { // Создаём элемент поля ввода
    // labelText — текст метки, id — идентификатор, type — тип поля (text, number и т.д.)
    const wrapper = document.createElement('div'); // Создаём обёртку для поля
    wrapper.style.marginBottom = '10px'; // Отступ снизу

    const label = document.createElement('label'); // Создаём элемент метки
    label.textContent = labelText; // Заполняем текст метки
    label.style.display = 'block'; // Делаем метку блочным элементом
    label.style.marginBottom = '5px'; // Отступ снизу метки

    const input = document.createElement('input'); // Создаём элемент поля ввода
    input.type = type; // Задаём тип поля (text, number и т.д.)
    input.id = id; // Задаём идентификатор поля
    input.required = true; // Делаем поле обязательным для заполнения
    input.placeholder = `Введите ${labelText.toLowerCase()}`; // Заполняем текст подсказки
    input.style.width = '100%'; // Ширина 100% от родителя
    input.style.padding = '8px'; // Отступы внутри поля
    input.style.border = '1px solid #ccc'; // Рамка вокруг поля
    input.style.borderRadius = '5px'; // Закругленные углы
    input.style.boxSizing = 'border-box'; // Учитываем рамку и отступы в ширине

    wrapper.appendChild(label); // Добавляем метку в обёртку
    wrapper.appendChild(input); // Добавляем поле ввода в обёртку
    return wrapper; // Возвращаем обёртку с меткой и полем ввода
}

// 📌 Вспомогательная функция: выпадающий список пород с пунктом "Другое"
function createBreedSelect(labelText, id) { // Создаём элемент выпадающего списка
    // labelText — текст метки, id — идентификатор
    const wrapper = document.createElement('div'); // Создаём обёртку для выпадающего списка
    wrapper.style.marginBottom = '10px'; // Отступ снизу

    const label = document.createElement('label'); // Создаём элемент метки
    label.textContent = labelText; // Заполняем текст метки
    label.style.display = 'block'; // Делаем метку блочным элементом
    label.style.marginBottom = '5px'; // Отступ снизу метки

    const select = document.createElement('select'); // Создаём элемент выпадающего списка
    select.id = id; // Задаём идентификатор выпадающего списка
    select.required = true; // Делаем его обязательным для заполнения
    select.style.width = '100%'; // Ширина 100% от родителя
    select.style.padding = '8px';
    select.style.border = '1px solid #ccc'; // Рамка вокруг выпадающего списка
    select.style.borderRadius = '5px';
    select.style.boxSizing = 'border-box';

    const breeds = [ // Массив пород
        'Лабрадор',
        'Немецкая овчарка',
        'Бульдог',
        'Пудель',
        'Бигль',
        'Хаски',
        'Шпиц',
        'Чихуахуа',
        'Такса',
        'Доберман',
        'Другое'
    ];

    breeds.forEach(breed => { // Перебираем массив пород
        // Создаём элемент option для каждой породы
        const option = document.createElement('option'); // Создаём элемент option
        option.value = breed; // Задаём значение option
        option.textContent = breed; // Заполняем текст option
        // Добавляем элемент option в выпадающий список
        select.appendChild(option); // Добавляем его в выпадающий список
    });

    // Поле "своя порода", скрыто по умолчанию
    const customInput = document.createElement('input'); // Создаём элемент поля ввода
    customInput.type = 'text'; // Задаём тип поля (text)
    customInput.placeholder = 'Введите породу'; // Заполняем текст подсказки
    customInput.style.display = 'none'; // Скрываем его по умолчанию
    customInput.style.width = '100%'; // Ширина 100% от родителя
    customInput.style.marginTop = '10px';
    customInput.style.padding = '8px';
    customInput.style.border = '1px solid #ccc';
    customInput.style.borderRadius = '5px';
    customInput.style.boxSizing = 'border-box';

    // Логика показа/скрытия
    select.addEventListener('change', () => { // Добавляем обработчик события изменения
        // Если выбрана "Другое" — показываем поле ввода
        if (select.value === 'Другое') {
            customInput.style.display = 'block'; // Показываем поле ввода
            customInput.required = true; // Делаем его обязательным для заполнения
        } else { // Иначе скрываем его
            customInput.style.display = 'none'; // Скрываем поле ввода
            customInput.required = false; // Делаем его необязательным для заполнения
        }
    });

    wrapper.appendChild(label); // Добавляем метку в обёртку
    wrapper.appendChild(select); // Добавляем выпадающий список в обёртку
    wrapper.appendChild(customInput); // Добавляем поле ввода "другое" в обёртку
    // Возвращаем обёртку с меткой, выпадающим списком и полем ввода "другое"
    return wrapper; 
}
