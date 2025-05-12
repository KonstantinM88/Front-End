// const emailInput = document.getElementById("email");

// emailInput.value = "john@gmail.com"; // Устанавливаем значение поля ввода email
// console.log(emailInput.value);

const form = document.getElementById("student-form");
const emailInput = form.elements["email"];
const studentContainer = document.getElementById("student-container");
const students = [
    { email: "default@gmail.com" },
    { email: "default2@gmail.com" },
  ]; // массив студентов

  function renderStudents(students) {
    students.forEach((student) => {
      const studentCard = document.createElement("div");
      studentCard.innerText = student.email;
      studentsContainer.appendChild(studentCard);
    });
  };

students.forEach((student) => {
  const studentItem = document.createElement("div");
  studentCard.innerText = student.email; // создаем элемент div для каждого студента
  studentContainer.appendChild(studentCard); // добавляем элемент в контейнер
});

//const student = [];

function onSubmit(event) {
  event.preventDefault();
  //   console.log("submit");
  console.log(emailInput.value);
  students.push({ email: emailInput.value });

  emailInput.value = ""; // очищаем поле ввода email
  renderStudents(students); // обновляем отображение студентов
}

form.addEventListener("submit", onSubmit);