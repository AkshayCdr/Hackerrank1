function alternatingCharacters(s) {
  // Write your code here
  //   s = s.split("");
  let result = [];
  let del = 0;
  result.push(s[0]);
  //   for (let i = 0; i < s.length; i++) {}
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      del++;
    } else {
      result.push(s[i + 1]);
    }
  }
  console.log(del);
  console.log(result);
}

alternatingCharacters("AAABBB");
