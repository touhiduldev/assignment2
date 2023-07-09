function sumArray(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log(result); // Output: 15
