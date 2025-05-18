
// Добавим стили через JS
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    cursor: url('https://cur.cursors-4u.net/cursor.png'), auto;
  }

  h1 {
    margin-bottom: 20px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

  .product-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    text-align: center;
    transition: transform 0.2s;
  }

  .product-card:hover {
    transform: scale(1.03);
  }

  .product-card img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
    display: block;
    margin: 0 auto 10px;
  }

  .product-card h3 {
    font-size: 16px;
    margin: 10px 0 5px;
  }

  .product-card p {
    margin: 0;
    font-weight: bold;
    color: #4CAF50;
  }
`;
document.head.appendChild(style);

// Заголовок
const title = document.createElement('h1');
title.textContent = 'Список продуктов';
document.body.insertBefore(title, document.querySelector('.container'));

// Основная функция загрузки
async function fetchProducts() {
  const container = document.querySelector('.container');

  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const products = await response.json();

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      const img = document.createElement('img');
      img.src = product.images[0];
      img.alt = product.title;
      img.referrerPolicy = 'no-referrer';
      img.crossOrigin = 'anonymous';
      img.onerror = () => {
        img.src = 'https://via.placeholder.com/150?text=No+Image';
      };

      const title = document.createElement('h3');
      title.textContent = product.title;

      const price = document.createElement('p');
      price.textContent = `$${product.price}`;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error);
    container.textContent = 'Не удалось загрузить список продуктов.';
  }
}

// Запуск
fetchProducts();
