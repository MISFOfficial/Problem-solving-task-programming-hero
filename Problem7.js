// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const evenNumber = (input) => {

    let even = []

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0){
            even.push(input[i])
        }
    }
    console.log(even)

}

evenNumber([5, 1, 3, 2])