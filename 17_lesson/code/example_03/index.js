let x;

setTimeout(() => {
    x = 10;
},0);

console.log(x); // undefined

// Intervals
// setInterval
const printHello = () => {
    console.log('Hello');
};

const printHelloInterval = setInterval(printHello, 1500); // 1.5 seconds

//clearInterval(printHelloInterval); // clear interval

const timeout = setTimeout(() => {
    clearInterval(printHelloInterval); // clear interval
}, 10000); // 10 seconds
// clearTimeout
