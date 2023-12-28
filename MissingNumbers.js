function missingNumbers(arr, brr) {
  // Write your code here
  let frequency = {};
  let result = [];
  let firstLength = arr.length;
  let secondLength = brr.length;
  if (arr.length >= brr.length) {
    for (let i of arr) {
      frequency[i] = (frequency[i] || 0) + 1;
    }
    for (let i of brr) {
      if (frequency[i]) {
        frequency[i]--;
      } else {
        //   frequency[i];
        console.log(frequency[i]);
      }
    }
    console.log(frequency);
  } else if (brr.length > arr.length) {
    for (let i of brr) {
      frequency[i] = (frequency[i] || 0) + 1;
    }
    for (let i of arr) {
      if (frequency[i]) {
        frequency[i]--;
      } else {
        //   frequency[i];
        console.log(frequency[i]);
      }
    }
  }
  for (let i in frequency) {
    if (frequency[i] > 0) {
      result.push(i);
    }
  }
  console.log(result);
}

missingNumbers(
  [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
  [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
);
