const vowels = (input) => {

    let max = input[0];
    for (let i of input) {
        if (i > max) {
            max = i
        }
    }
    console.log(max)
}

vowels([5, 1, 9, 3])