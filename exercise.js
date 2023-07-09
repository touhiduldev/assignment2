
// Exercise 1 Start : => Object and Array

// Object Destructure

const destructureExample = {
    name: 'Touhidul',
    age: 27,
    city: 'Chapai Nawabganj',
};
const { name, age,city } = destructureExample;

console.log(name); // Output: Touhidul
console.log(age);  // Output: 27


// Array Destructure

const destructureExampleArray = [10, 20, 30, 40];
const [first, second, third,fourth] = destructureExampleArray;

console.log(first);   // Output: 10
console.log(second);  // Output: 20
console.log(third);   // Output: 30
console.log(fourth);   // Output: 40

// Exercise 1 End


