// Write a function that returns the sum of all numbers in an array.

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