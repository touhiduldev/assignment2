
// Exercise 2:
function sumNumbers(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumNumbers(1, 2, 3, 10));  // Output: 6
console.log(sumNumbers(4, 5, 6, 7, 5));  // Output: 22
console.log(sumNumbers(10, -5, 3, 8, -2));  // Output: 14
