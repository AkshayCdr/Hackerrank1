function anagram(s) {
  // Write your code here
  if (s.length % 2 !== 0) {
    return -1;
  }
  let firstString = s.slice(0, s.length / 2);
  let secondString = s.slice(s.length / 2, s.length);
  let count = 0;
  let frquency1 = {};
  for (let i of firstString) {
    frquency1[i] = (frquency1[i] || 0) + 1;
  }
  //   let frequency2 = {};
  //   for (let i of secondString) {
  //     frequency2[i] = (frequency2[i] || 0) + 1;
  //   }

  for (let i of secondString) {
    if (frquency1[i] && frquency1[i] > 0) {
      frquency1[i]--;
    } else {
      count++;
    }
  }
  //   console.log(frquency1);

  console.log(count);
}

anagram("abccde");
