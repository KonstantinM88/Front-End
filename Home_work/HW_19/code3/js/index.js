// 1. Отправить запрос на https://api.escuelajs.co/api/v1/products
// и получить (вывести в консоль) массив с данными с списком продуктов
// 2. Отрисовать карточки (id,name,slug,image,price)
// 3. Стилизовать карточки (border, padding, border-radius).
// Из контейнера сделать grid - 5 колонок + отступы
// display grid;
// grid-template-columns repeat(5, 1fr);
// gap 40px;

// Стили через JS
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
  }

  .product-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 15px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    text-align: center;
    transition: transform 0.2s;
  }

  .product-card:hover {
    transform: scale(1.02);
  }

  .product-card img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .product-card h3 {
    font-size: 16px;
    margin: 10px 0 5px;
  }

  .product-card p {
    margin: 4px 0;
  }
`;
document.head.appendChild(style);

// Получаем контейнер
const container = document.querySelector('.container');

// Асинхронная функция для получения и отображения данных
async function loadProducts() {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const products = await response.json();
    
    console.log('📦 Полученные продукты:', products); // ← Пункт 1: Вывод в консоль

    products.forEach(product => {
      const imageUrl =
        Array.isArray(product.images) &&
        product.images[0] &&
        product.images[0].startsWith('http')
          ? product.images[0]
          : 'https://via.placeholder.com/150?text=No+Image';

      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${imageUrl}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p><strong>ID:</strong> ${product.id}</p>
        <p><strong>Slug:</strong> ${product.slug || '—'}</p>
        <p><strong>Price:</strong> $${product.price}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error('❌ Ошибка загрузки данных:', error);
    container.textContent = 'Ошибка загрузки данных.';
  }
}

// Запуск
loadProducts();
