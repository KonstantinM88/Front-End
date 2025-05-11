// При клике на burger_icon класс nav_active
//  у ul появляется, если его нет, и удаляется, если он есть
const burger_icon = document.querySelector('.burger_icon'); // Получаем элемент с классом burger_icon
// querySelector() — это метод JavaScript, который позволяет получить первый элемент на странице, 
// соответствующий CSS-селектору.
const nav_menu = document.querySelector('.nav_menu'); // Получаем элемент с классом nav_menu

burger_icon.addEventListener('click', ()=>nav_menu.classList.toggle("nav_active")); // Добавляем обработчик события клика на элемент burger_icon,
// который переключает класс nav_active у элемента nav_menu.