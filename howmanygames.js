function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let i = s;
  let count = 0;
  while (i >= 0) {
    if (p <= m) {
      if (i >= p) {
        i = i - p;
        if (i >= 0) {
          count++;
        }
      } else {
        break;
      }
    } else {
      if (i >= p) {
        i = i - p;
        p = p - d;
        if (i >= 0) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

howManyGames(20, 3, 6, 70);
