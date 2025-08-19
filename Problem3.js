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