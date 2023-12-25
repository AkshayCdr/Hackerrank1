function quickSort(arr) {
  let left = [];
  let right = [];
  let equal = [];
  let p = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < p) {
      left.push(arr[i]);
    } else if (arr[i] > p) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }
  return left.concat(equal, right);
}
