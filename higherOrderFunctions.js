// Higher Order Functions
// Functions which accept a function as a parameter.
// OR
// Functions which return a function.

// activity 1

// const logger = () => {
//     console.log("Hello Codenation")
// }

// const fiveLogger = () => {
//     for (let i = 0; i < 5; i++) {
//         logger();
        
//     }
// }

// fiveLogger()

// activity 2

// const numbers = [1, 2, 3, 4, 5];

// const threeX = (num) => {
  
//     return num * 3;
//     }
    
// const newArray = numbers.map(threeX);

// console.log(newArray)

// activity 3

const add = (a, b) => {
    return a + b;
   };
const subtract = (a, b) => {
    return a - b;
   };
const multiply = (a, b) => {
    return a * b;
   };
const divide = (a, b) => {
    return a / b;
   };
const doMaths = (num1) => {
    return (num2, fn) => {
    return fn(num1, num2);
    };
   };

console.log(doMaths(7)(5, subtract));