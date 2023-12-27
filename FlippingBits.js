function flippingBits(n) {
  // Write your code here
  console.log((Math.pow(2, 32) - 1) ^ n);
}

console.log(flippingBits(9));
