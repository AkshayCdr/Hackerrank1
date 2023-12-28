function twoStrings(s1, s2) {
  //   for (let i = 0; i < s1.length; i++) {
  //     for (let j = i + 1; j <= s1.length; j++) {
  //       let sub = s1.substring(i, j);
  //       if (s2.includes(sub)) {
  //         return "YES";
  //       }
  //     }
  //   }
  //   return "NO";

  let length = s1.length;
  for (let i = 0; i < length; i++) {
    if (s2.includes(s1[i])) {
      return "YES";
    }
  }

  return "NO";
}

// twoStrings("and", "art");
twoStrings("hi", "world");
