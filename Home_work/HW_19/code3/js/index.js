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
    grid-template-columns: repeat(4, 1fr);
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

// App.jsx или App.js

import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  // Асинхронная загрузка продуктов
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Список продуктов</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '20px' }}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img
              src={product.images[0]}
              alt={product.title}
              width="200"
              referrerPolicy="no-referrer" // обход блокировки
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/200?text=No+Image';
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
