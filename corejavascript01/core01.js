// //nodemon corejavascript01/core01.js
// //Q1. Write a program that grades students based on their marks.
// //ans
// let marks = 91;

// console.log("Answer of Q1")

// if(marks > 90){  // if marks will be greater than 90 than output will be grade A
//     console.log("Student got grade A"); 

// }else if(marks <= 90 && marks > 70){  // if marks is between 70 and 90 than output will be grade B
//     console.log("Student got grade B")

// }else if(marks <= 70 && marks > 50){   // if marks is between 50 and 70 than output will be grade B
//     console.log("Student got grade C")
    
// }else{            // or marks is less than 50 out of 100 than it wiil print grade F
//     console.log("Student got grade F")
// }


// Q2. Generate numbers between any 2 given numbers.

const num1 = 10;
const num2 = 15;

let result = '';

for(let i = num1 + 1; i <= num2; i++){    
    
    result = result + " " + i  // it will print the result (output) in row direction or in line
}

console.log( "Answer of Q2" , result);