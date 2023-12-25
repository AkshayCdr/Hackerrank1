function subArray(arr, n) {
  let first = 0;
  let second = n - 1;
  let result = [];
  let avg = [];
  let sum = 0;
  for (let i = 0; i < arr.length - n; i++) {
    sum = 0;
    for (let j = first; j <= second; j++) {
      sum += arr[j];
    }
    avg.push(sum / n);
    result.push(sum);
    first++;
    second++;
  }
  console.log(result);
  console.log(avg);
}

subArray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
