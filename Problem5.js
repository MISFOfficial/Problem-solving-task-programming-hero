// Write a function that removes all duplicate numbers from an array.

const duplicate = (input) => {

    let num = []

    for (let i = 0; i < input.length; i++) {

        if (!num.includes(input[i])) {
            num.push(input[i])
        }
    }
    console.log(num)

}

duplicate([5, 1, 9, 3, 4, 4, 4, 8,8])