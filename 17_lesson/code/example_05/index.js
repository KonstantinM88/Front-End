const imgElement = document.getElementById("cat-image"); // Получаем элемент изображения
//  с идентификатором "cat-image"

fetch("https://api.thecatapi.com/v1/images/search") // Запрос к API для получения случайного 
// изображения кота
  .then((res) => res.json()) // Преобразуем ответ в JSON
  // res - это ответ от сервера
  .then((data) => { // data - это данные, которые мы получили от сервера
    const catImgUrl = data[0].url; // Получаем URL изображения кота из данных
    // data[0] - это первый элемент массива, который мы получили от сервера
    imgElement.src = catImgUrl; // Устанавливаем URL изображения в src элемента img
    // imgElement - это элемент изображения, который мы получили ранее
  });