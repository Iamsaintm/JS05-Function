function prime(n) {
  let isPrime = true;
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(n);
  } else {
    console.log("Not a Prime number");
  }
}
prime(prompt("Number"));
