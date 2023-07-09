const number1 = 10;
const number2 = 50;

function getLargestNumber(number1, number2) {
  return number1 && (number1 > number2) ? number1 : number2;
}
const largestNumber = getLargestNumber(number1, number2);

console.log("The largest number is:", largestNumber);

