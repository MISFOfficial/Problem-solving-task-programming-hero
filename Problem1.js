// Write a function that takes a string and returns it reversed.

const string = () => {
    
    let input = "hello"
    reversed = ""
    for (let i = input.length -1; i>=0; i--) {
        // console.log(i, input[i])
        reversed += input[i];
    }
    console.log(reversed)

    // let reversed2 =input.split("").reverse().join("")
    // console.log(reversed2)

}

string()