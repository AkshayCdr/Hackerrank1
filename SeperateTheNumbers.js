function separateNumbers(s) {
  // Write your code here
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      console.log(s.substring(i, j));
    }
  }
}

separateNumbers("10203");
