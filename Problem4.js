const max_num = (input) => {

    let max = input[0];
    for (let i of input) {
        if (i > max) {
            max = i
        }
    }
    console.log(max)
}

max_num([5, 1, 9, 3])