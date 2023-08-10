const isPrime = (n) => {
  prime = true;
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    return n;
  }
};
console.log(isPrime(7));
