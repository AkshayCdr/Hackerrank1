function lonelyinteger(a) {
  // Write your code here
  let hash = {};
  for (let i in a) {
    if (hash[a[i]]) {
      hash[a[i]]++;
    } else {
      hash[a[i]] = 1;
    }
  }
  //   console.log(hash);
  for (let i in hash) {
    // console.log(i);
    if (hash[i] === 1) {
      return i;
    }
  }
}

lonelyinteger([0, 0, 1, 2, 1]);
