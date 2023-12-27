function weightedUniformStrings(s, queries) {
  // Write your code here
  //   console.log(Math.abs(s.charCodeAt(0) - 96));
  //check this value is in query or not
  //   for (let i in s) {

  //   }
  let result = [];
  let sum = 0;
  result.push(s.charCodeAt(0) - 96);
  for (let i = 1; i < s.length; i++) {
    sum = 0;
    if (s[i] === s[i - 1]) {
      //   i++;
      //   sum += s.charCodeAt(i + 1);
      sum += result[i - 1] + s.charCodeAt(i) - 96;
      result.push(sum);
    } else {
      result.push(s.charCodeAt(i) - 96);
    }
  }
  console.log(result);
  let queryResult = [];
  for (let i in queries) {
    // console.log(result.includes(queries[i]));
    if (result.includes(queries[i])) {
      queryResult.push("Yes");
    } else {
      queryResult.push("No");
    }
  }
}

weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10]);
