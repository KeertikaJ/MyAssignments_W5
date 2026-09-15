//Factorial of Number
function factorial(n: number)  {
    let i: number;
    let factorialNumber: number = 1;
    if (n > 0) {
        for (i = 1; i <= n; i++) {
            factorialNumber = i * factorialNumber
        }
    console.log(factorialNumber)
    } else if (n === 0) {
        console.log("Enter Number is Zero");
    } else {
        console.log("Entered is a Negative Number, Try to Enter a Non Negative Number")
    }   
}
factorial(6);
