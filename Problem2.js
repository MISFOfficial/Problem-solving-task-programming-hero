const vowels = (input) => {

    count = 0;
    let vowel='aeiouAEIOU'

    for (let i of input) {
        // console.log(input[i])
        if (vowel.includes(i)) {
            count++
        }
    }
    console.log(count)
}

vowels("programming")