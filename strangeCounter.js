function strangeCounter(t) {
  // Write your code here
  let value = 3;
  let j = 0;
  for (let i = 1, j = value; i <= t; i++, j--) {
    if (j < 1) {
      value = value * 2;
      j = value;
    }
    if (i === t) {
      return j;
    }
  }
}

strangeCounter(21);
