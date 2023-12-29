function balancedSums(arr) {
  // Write your code here
  let sum = arr.reduce((acc, ele) => acc + ele);
  //   console.log(sum);

  let leftsum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (leftsum === sum - leftsum - arr[i]) {
      return "Yes";
    }
    leftsum += arr[i];
  }
  return "No";
}

balancedSums([5, 6, 8, 11]);
