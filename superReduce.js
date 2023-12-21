function superReducedString(s) {
  // Write your code here
  let reduced = true;
  while (reduced) {
    reduced = false;
    s = s.split("");
    for (let i = 0; i < s.length; ) {
      if (s[i] === s[i + 1]) {
        s[i] = "x";
        s[i + 1] = "x";
        i += 2;
        reduced = true;
      }
      i++;
    }
    s = s.filter((i) => i !== "x").join("");
  }
  return s;
}

console.log(superReducedString("aaabccddd"));
