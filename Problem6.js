// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

const sum_of_arry = (input) => {

    let sum=0
    for (let i =0; i < input.length; i++){
        sum+=input[i];
    }

    console.log(sum)

}

sum_of_arry([5, 1, 3])