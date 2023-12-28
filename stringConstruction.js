function stringConstruction(s) {
  // Write your code here
  //find substring i and end
  //   let result = "";
  //   let count = 0;
  //   for (let i = 0; i < s.length; i++) {
  //     if (result === s.substring(i, s.length)) {
  //       result += s.substring(i, s.length);
  //       break;
  //     } else {
  //       result += s[i];
  //       count++;
  //     }
  //     // console.log(s.substring(i, s.length));
  //     console.log(result);
  //   }
  //   console.log(result);
  //   console.log(count);
  let unique = new Set([...s]);
  return [...unique].length;
}

stringConstruction("abcd");
