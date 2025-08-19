// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

const Factorial = (input) => {

    let result=1;
    for (let i=1; i<=input; i++){
        result*=i
    }

    console.log(result)

}

Factorial(5)