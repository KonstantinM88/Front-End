// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id и текст
clonedBtn.id = "magic-btn-2";
clonedBtn.textContent = "Я изменю тебя";

// применим стили
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";

// обработчик клика по первой кнопке
clonedBtn.classList.add("second-btn"); // добавляем класс для стилизации второй кнопки
btn.addEventListener('click', () => {
  // добавим вторую кнопку в документ, только если её ещё нет
  if (!document.getElementById("magic-btn-2")) {
    document.body.appendChild(clonedBtn);
  }
});


// обработчик клика по второй кнопке
clonedBtn.addEventListener('click', () => {
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
    btn.textContent = "Я изменился!";
});
