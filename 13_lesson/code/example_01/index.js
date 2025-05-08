function outer() {
  this.age = 16;
  function inner() {
    return this;
  }
  return inner;
}

const inner = outer();
console.log(inner());
