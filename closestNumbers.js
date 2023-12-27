function closestNumbers(arr) {
  // Write your code here
  //   arr = arr.sort((a, b) => {
  //     return a - b;
  //   });
  //   console.log(arr);
  let difference = 0;
  let min = Infinity;
  let result = [];
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    difference = arr[i + 1] - arr[i];
    if (min > difference) {
      min = difference;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    difference = arr[i + 1] - arr[i];
    if (difference === min) {
      result.push(arr[i]);
      result.push(arr[i + 1]);
    }
  }
  console.log(result);
}

closestNumbers([5, 2, 3, 4, 1]);
