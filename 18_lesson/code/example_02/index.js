const heading = document.getElementById("heading");
const imPirate = document.getElementById("pirate-picture");
const favDrinkElement = document.getElementById("favorite-drink");
const parrotsContainer = document.getElementById("parrots-container");


fetch("https://alisherkhamidov.github.io/fake-pirate/joe-sparrow.json")
  //  Promise<res>
  .then((res) => {
    // console.log(res.status);
    // console.log(res.ok); //
    // console.log(res);
    if (res.status === 404) {
      throw new Error("Custom not found message");
    }
    // .json() - распарсит json
    // .text() - вернул строку json как есть - с кавычками
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    console.log(data); // ОБЯЗАТЕЛЬНО ПОСМОТРИТЕ ЧЕМ ЯВЛЯЕТСЯ ТЕЛО ОТВЕТА
    const { name, url } = data;
    heading.innerText = name;
    imPirate.src = url;
    imPirate.style.width = "200px";
    favDrinkElement.innerText = favoriteDrink;

    parrots.forEach((parrot) => {
        const parrotCard = document.createElement("li");
        parrotCard.innerText = parrot.name;
        parrotsContainer.appendChild(parrotCard);
      });
  })
  .catch((err) => {
    console.log(err.message); // Custom not found message
  });
// HTTP - протокол клиент-серверного взаимодействия
// Статусы:
// 200 - Success - успех - получили ответ
// 400 - Bad request
// 401 - Unuthorized -
// 403 - Access Denied - доступ запрещен
// 404 - Not found
// 500 - Server error

// 200-299 - положительные статусы
// 300-400 - редирект
// 400-500 - ошибки