function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

const numbers = [5, 2, 9, 1, 3];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 9]
