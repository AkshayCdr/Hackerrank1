function rotateLeft(d, arr) {
  for (let i = 0; i < d; i++) {
    arr = swapLeft(arr);
  }
  console.log(arr);
}

function swapLeft(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
}

rotateLeft(2, [1, 2, 3, 4, 5]);
