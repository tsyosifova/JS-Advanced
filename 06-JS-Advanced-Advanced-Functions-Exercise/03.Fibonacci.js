function fibonacci() {
let previous = 0;
let current = 1;

return function () {
    const result = current;
    current += previous;
    previous = result;

    return result;
}

    
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
