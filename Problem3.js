// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

const Palindrome = (input) => {
    input = input.toLowerCase()

    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]){
            console.log(false)
            return 
        }
    }
    console.log(true)
};

Palindrome('madam')
Palindrome('hello')