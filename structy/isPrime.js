/*
Write a function, isPrime, that takes in a number as an argument. 
The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

You can assume that the input number is a positive integer.
*/

// MY SOLUTION
const isPrime = (n) => {
  const sqRt = Math.sqrt(n); // get the sqrt of n to cut the time complexity down

  if (n % sqRt === 0) {
    // if n % sqRt == 0 , return false
    return false;
  }

  for (let i = 2; i < n; i++) {
    // count all integers leading up to n but not including n or 1
    if (n % i === 0) {
      // if n % that number (i) = 0 n is not prime

      return false;
    }
  }
  return true; // otherwise the number is prime
};

// TIME COMPLEXITY O(squareRoot of n)
//SPACE COMPLEXITY O(1)
