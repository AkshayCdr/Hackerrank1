function findelement(start, end, array) {
  let elements = [];
  for (let i = start; i <= end; i++) {
    elements.push(array[i]);
  }
  return elements;
}

function serviceLane(n, cases) {
  // Write your code here
  let result = [];
  for (let i of cases) {
    for (let j = 0; j < i.length - 1; j++) {
      //get elements of j and j+1 from n
      let elements = findelement(i[j], i[j + 1], n);
      //get min and insert it in res
      let min = Math.min(...elements);
      result.push(min);
    }
  }
  return result;
}

console.log(
  serviceLane(
    [2, 3, 1, 2, 3, 2, 3, 3],
    [
      [0, 3],
      [4, 6],
      [6, 7],
      [3, 5],
      [0, 7],
    ]
  )
);
