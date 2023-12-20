function flatlandSpaceStations(n, c) {
  //c - index of space station
  //n - number of cities
  let result = [];
  for (let i of c) {
    for (let j = 0; j < n; j++) {
      //   console.log(`${i} and ${j}`);
      //push min abs i-j
      if (result[j] || result[j] === 0) {
        if (result[j] > Math.abs(i - j)) {
          result[j] = Math.abs(i - j);
        }
      } else {
        result[j] = Math.abs(i - j);
      }

      //   result.push(Math.abs(i - j));
    }
  }
  let max = Math.max(...result);
  console.log(max);
}
flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]);
