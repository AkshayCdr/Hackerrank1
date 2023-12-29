function twoArrays(k, A, B) {
  // Write your code here
  //   A = A.sort((a, b) => a - b);
  //   B = B.sort((a, b) => a - b);
  //   for (let i in A) {
  //     if (A[i] + B[i] < k) {
  //       return "NO";
  //     }
  //   }
  //   return "YES";

  //   const removeSubarray = (arr, subarr) =>
  //     arr.filter((item) => !subarr.every((val, index) => val === item[index]));

  //   for (let i of A) {
  //     let temp = k - i;
  //     console.log(temp);
  //     let temparr = B.filter((i) => i >= temp);
  //     console.log(temparr);
  //     let filtarrayB = removeSubarray(B, temparr);
  //     console.log(filtarrayB);
  //   }
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  for (let i in A) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]);
