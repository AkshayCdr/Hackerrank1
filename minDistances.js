function minimumDistances(a) {
  // Write your code here
  //find frquency
  let hash = {};
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (hash[a[i]]) {
      hash[a[i]]++;
    } else {
      hash[a[i]] = 1;
    }
  }
  console.log(hash);
  //floor(frequency/2) pairs
  let min = Infinity;
  for (let i in hash) {
    // console.log(i);
    console.log(hash[i]);
    if (hash[i] > 1) {
      count++;
      let indexes = findDifference(i, a);
      if (indexes < min) {
        min = indexes;
      }
    }
  }
  if (count === 0) {
    return -1;
  }
  console.log(min);
  return min;
}
function findDifference(data, a) {
  //find indexes of element and difference of the index
  let element = parseInt(data);
  let difference = 0;
  let temp = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === element) {
      if (temp !== 0) {
        temp = Math.abs(temp - i);
        break;
      }
      temp = i;
    }
  }
  return temp;
  //   console.log(temp);
}

// findDifference(2, [3, 2, 1, 2, 3]);
// minimumDistances([3, 2, 1, 2, 3]);
// minimumDistances([7, 1, 3, 4, 1, 7]);
minimumDistances([1, 2, 3, 4, 10]);
