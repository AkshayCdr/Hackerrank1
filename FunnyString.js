function funnyString(s) {
  // Write your code here
  let diff1 = [];
  let diff2 = [];
  let reverse = s.split("").reverse().join("");
  s = s.split("").map((i) => i.charCodeAt(i));
  reverse = reverse.split("").map((i) => i.charCodeAt(i));
  for (let i = 0; i < s.length - 1; i++) {
    diff1.push(Math.abs(s[i + 1] - s[i]));
  }
  for (let i = 0; i < reverse.length - 1; i++) {
    diff2.push(Math.abs(reverse[i + 1] - reverse[i]));
  }
  if (diff1.toString() === diff2.toString()) {
    return "Funny";
  } else {
    return "Not Funny";
  }
}

funnyString("lmnop");
