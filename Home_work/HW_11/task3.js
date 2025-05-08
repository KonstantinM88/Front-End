// Создайте функцию gardender, которая принимает в себя два параметра: операцию и предмет, на который эта операция будет направлена.

// Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this " плюс название конкретного цветка.

// Вызовите фунцкию gardender c параметрами: функция поливать цветок, 'rose'.

// Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник. 

function gardender(operation, item) {
    operation(item)
}

let y = 10;

// hosting //learn javascript
function water(plant) {
    console.log(`I water this ` + plant);
}

gardender(water, "rose");

gardender((plant)=>{console.log(`I dig this `+ plant);}, "nettle"); // callback