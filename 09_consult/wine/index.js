// 1. Отправить запрос на https://api.sampleapis.com/wines/whites
//  и получить (вывести в консоль) массив с данными о белых винах
// 2. Отрисовать карточки вин с рейтингом 4.8 и более (image, wine, winery, rating)
// 3. Стилизовать карточки (border, padding, border-radius).
//  Из контейнера сделать grid - 5 колонок + отступы
//  display: grid;
//  grid-template-columns: repeat(5, 1fr);
//  gap: 40px;
// 4. Если у вина рейтинг 4.9 и больше то покрасить карточку
//  в светло-зеленый. А если 4.8 - то в светло-голубой

// 1. Добавим стили через JS
const style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        padding: 20px;
    }

    h1 {
        margin-bottom: 20px;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 40px;
    }

    .card {
        border: 1px solid #ccc;
        padding: 15px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        transition: transform 0.2s;
    }

    .card:hover {
        transform: scale(1.03);
    }

    .card img {
        max-width: 100%;
        border-radius: 5px;
    }

    .wine-name {
        font-weight: bold;
        margin-top: 10px;
    }

    .winery {
        color: #666;
        font-size: 14px;
    }

    .rating {
        margin-top: 5px;
    }
`;
document.head.appendChild(style);

// 2. Создаём заголовок
const title = document.createElement('h1');
title.textContent = 'Белые вина с рейтингом 4.8+';
document.body.insertBefore(title, document.querySelector('.container'));

// 3. Получаем контейнер
const container = document.querySelector('.container');

// 4. Запрос к API и отрисовка карточек
fetch('https://api.sampleapis.com/wines/whites')
    .then(res => res.json())
    .then(data => {
        const topWines = data.filter(wine => wine.rating && wine.rating.average >= 4.8);

        topWines.forEach(wine => {
            const card = document.createElement('div');
            card.classList.add('card');

            // Цвет по рейтингу
            const rating = wine.rating.average;
            if (rating >= 4.9) {
                card.style.backgroundColor = '#d9fdd3'; // светло-зелёный
            } else if (rating >= 4.8) {
                card.style.backgroundColor = '#d3f1fd'; // светло-голубой
            }

            // Содержимое карточки
            card.innerHTML = `
                <img src="${wine.image}" alt="${wine.wine}">
                <div class="wine-name">${wine.wine}</div>
                <div class="winery">${wine.winery}</div>
                <div class="rating">⭐ ${wine.rating.average}</div>
            `;

            container.appendChild(card);
        });
    })
    .catch(err => {
        console.error('Ошибка при загрузке вин:', err);
        container.textContent = 'Не удалось загрузить данные о винах.';
    });