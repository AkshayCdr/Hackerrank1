function reverseArray(a) {
  // Write your code here
  let arr = [];
  for (let i = a.length - 1; i >= 0; i--) {
    arr.push(a[i]);
  }
  return arr;
}

reverseArray([3, 2, 1]);
