// Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

const pingPong = (input1, input2) => {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(input1,input2);
        } else if (i % 3 === 0) {
            console.log(input1);
        } else if (i % 5 === 0) {
            console.log(input1);
        } else {
            console.log(i);
        }
    }
};

pingPong('ping', 'pong');