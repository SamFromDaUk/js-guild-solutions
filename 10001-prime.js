// Create a timestamp for when the program began running
const start = Date.now();

const isPrime = (num) => {
  // The number to try and divide by
  let factor = 2;

  // Only try to divide up to half the number
  while (factor <= (num / 2)) {
    // If the number divide factor is a whole number
    if ((num / factor) % 1 === 0) {
      // Then it is not prime
      return false;
    }

    factor++;
  }

  // No divisers were found, therefore it is prime
  return true;
}

// The prime number counter
let index = 0;
// The number we are checking if prime
let num = 0;

while (index <= 10001) {
  num++;

  if (isPrime(num)) {
    index++;
  }
};

console.log(`Answer: ${num} Time: ${Date.now() - start}ms`);
