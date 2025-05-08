// проверим подколючился ли скрипт
console.log("check");

// получаем элементы в переменные
const infoBtn = document.getElementById("info-btn");
const removeInfoBtn = document.getElementById("remove-info-btn");

const infoMessage = document.createElement("p");
infoMessage.innerText = "This summer is not warm at all";
console.log(infoMessage); //<p>This summer is not warm at all</p>

// повесим слушатели событий
infoBtn.addEventListener("click", () => {
  // console.log("click-click"); // проверили

  // добавили вновь созданный элемент в body документа
  document.body.appendChild(infoMessage);
});

removeInfoBtn.addEventListener("click", () => {
  //Удалить элемент со страницы
  // чтобы удалить элемент нужно вызвать от него метод remove
  infoMessage.remove(); // убрали элемент со страницы - открепили
});

// в домашнем задании будет такой метод
const infoClone = infoBtn.cloneNode(infoBtn);
infoClone.id = "new-id-msg"; //заменbли id
console.log("Склонированный узел, с измененным id", infoClone);