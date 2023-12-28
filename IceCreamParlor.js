function icecreamParlor(m, arr) {
  // Write your code here
  //   let uniq = new Set();
  //   for (let i in arr) {
  //     let temp = m - arr[i];
  //     if (arr.includes(temp)) {
  //       //return i and index of temp
  //       uniq.add(arr[i]);
  //       uniq.add(temp);
  //     }
  //   }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === m) {
        result.push(i + 1);
        result.push(j + 1);
      }
    }
  }
  console.log(result);
  //   console.log(uniq);
}

icecreamParlor(6, [1, 3, 4, 5, 6]);
