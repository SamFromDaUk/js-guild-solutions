// Create a timestamp for when the program began running
const start = Date.now();

// 9! the max possible number
const maxNumber = 2540161;
const cache = [];
let sum = 0;

// Taken from https://stackoverflow.com/a/3959361/1065786
const factorial = (num) => {
  let rval = 1;

  for (let i = 2; i <= num; i++) {
    rval = rval * i;
  }

  return rval;
}

// Create a cache of 1 to 9 factorials to remove  the need to repeat factorial calls for the same digits
for (let i = 0; i < 10; i++) {
  cache[i] = factorial(i);
}

for (let i = 10; i < maxNumber; i++) {
  // Turn the number into an array of digits
  const digits = i.toString().split('');

  digits.forEach((digit, i) => {
    // Convert the digit into its factorial total
    digits[i] = cache[digit];
  })

  // Add up the factorials
  const total = digits.reduce((a, b) => {
    return a + b;
  });

  // If the number is equal to the sum of its factorials add it to the sum
  if (i === total) {
    sum += total;
  }
}

console.log(`Answer: ${sum} Time: ${Date.now() - start}ms`);
