function hourglassSum(arr) {
  // Write your code here
  let max = arr[0][0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i + 2 > arr.length - 1 || j + 2 > arr.length - 1) {
        continue;
      } else {
        sum +=
          arr[i][j] +
          arr[i][j + 1] +
          arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1] +
          arr[i + 2][j + 2];
        if (sum > max) {
          max = sum;
        }
        sum = 0;
      }
    }
  }

  console.log(max);
}

hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]);
