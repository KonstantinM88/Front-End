// JSON
// JavaScript object notation

const user = {
    name: 'john',
    email: 'john@example.com',
    age: 18,
};

// основной формат передачи и хранения информации - это JSON
// JSON - это строка, которая представляет собой объект JavaScript
const userAsJSONString = JSON.stringify(user);
console.log(userAsJSONString); // {"name":"john","email":"john@example.com","age":18}

const userFromJSONString = JSON.parse(userAsJSONString);
console.log(userFromJSONString); // {"name":"john","email":"john@example.com","age":18}


