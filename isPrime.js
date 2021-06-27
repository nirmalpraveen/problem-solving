function isPrime(num) {
  var isPrime = false;
  if (num == 0 || num === 1) {
    console.log('not a prime number');
  } else if (num === 2 || num === 3) {
    console.log('Yes a prime number');
  } else if (num > 3) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        console.log('not prime number');
        return;
      } else {
        isPrime = true;
      }
    }
  }
  if (isPrime) {
    console.log('Yes prime number');
  }
}

isPrime(13);
