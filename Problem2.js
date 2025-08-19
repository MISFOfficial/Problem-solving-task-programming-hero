// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

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