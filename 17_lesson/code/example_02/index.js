// Timers
// setTimeout

const x= 10;
console.log(x);
// setTimeout(function(){
setTimeout(() => {
    console.log('Hello after 2 seconds');
    }, 2000); // 2 seconds

const y = 15;
console.log(y);

setTimeout(() => {
    x = 12;
    console.log(x);
}, 1000); // 1 second
//console.log(x); // 10