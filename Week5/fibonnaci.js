"use strict";
function fibonacci(n) {
    let firstNumber = 0;
    let secondNumber = 1;
    let fibonacciNumber = -1;
    if (n > 1) {
        for (let i = 2; i <= n; i++) {
            fibonacciNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = fibonacciNumber;
        }
    }
    else if (n === 1) {
        fibonacciNumber = secondNumber;
    }
    else if (n === 0) {
        fibonacciNumber = firstNumber;
    }
    else {
        console.log("To calculate Fibonnaci, enter a Non Negative number");
    }
    console.log(`Fibonaci of ${n} is ${fibonacciNumber}`);
}
fibonacci(2);
