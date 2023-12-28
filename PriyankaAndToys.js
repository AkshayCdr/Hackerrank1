function toys(w) {
  // Write your code here
  //take element
  //find min and add 4 and insert elements
  //take next element
  //
  let count = 0;
  while (w.length > 0) {
    let min = Math.min(...w);
    w = w.filter((i) => i > min + 4);
    if (w) {
      count++;
    }
    console.log(w);
  }
  console.log(count);
}

toys([1, 2, 3, 21, 7, 12, 14, 21]);
