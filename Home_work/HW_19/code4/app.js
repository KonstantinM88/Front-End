// Добавим стили через JS
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: sans-serif;
    background: #f4f4f4;
    margin: 0;
    padding: 20px;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  #products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
    padding: 0;
    list-style: none;
    max-width: 1200px;
    margin: 0 auto;
  }

  li {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }

  li:hover {
    transform: scale(1.02);
  }

  h3 {
    font-size: 16px;
    margin-bottom: 8px;
    color: #444;
  }

  .price {
    font-weight: bold;
    margin-bottom: 10px;
    color: #008000;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
document.head.appendChild(style);

// Получаем и отображаем продукты
async function fetchProducts() {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const products = await response.json();
    const container = document.getElementById('products');

    products.forEach(product => {
      const item = document.createElement('li');

      const title = document.createElement('h3');
      title.textContent = product.title;

      const price = document.createElement('div');
      price.className = 'price';
      price.textContent = `Цена: $${product.price}`;

      const img = document.createElement('img');
      img.src = product.images[0];
      img.alt = product.title;
      img.referrerPolicy = 'no-referrer';
      img.onerror = () => {
        img.src = 'https://via.placeholder.com/150?text=No+Image';
      };

      item.appendChild(title);
      item.appendChild(price);
      item.appendChild(img);
      container.appendChild(item);
    });
  } catch (error) {
    console.error('Ошибка загрузки продуктов:', error);
  }
}

fetchProducts();
