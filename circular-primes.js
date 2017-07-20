const sieve = require('sieve-of-eratosthenes');

// Create a timestamp for when the program began running
const start = Date.now();
// Generate a list of prime numbers below 1,000,000
const primes = sieve(1000000);

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

  // No dividers were found, therefore it is prime
  return true;
}

// We use filter here to remove non circular primes from the array using the allPrime var
const circularPrimes =  primes.filter((prime) => {
  // Convert to a string for manipulation
  let num = prime.toString();
  // Counter for the number of variants to check
  let i = 0;
  let allPrime = true;

  // If the number has a even digit it wont be a circular prime, reduces run time of the program
  if (num.length > 1 && num.match(/0|2|4|6|8/)) {
    return false;
  }

  // Loop through variants
  while (i < num.length) {
    if (!isPrime(num)) {
      allPrime = false;
    }

    // Move the first char to the end of the string
    num = num.substr(1, num.length) + num.substr(0, 1);
    i++;
  }

  return allPrime;
});

console.log(`Answer: ${circularPrimes.length} Time: ${Date.now() - start}ms`);
