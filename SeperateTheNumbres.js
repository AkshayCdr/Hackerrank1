function separateNumbers(s) {
  let number,
    temp,
    str,
    valid = false;
  if (s.charAt(0) === "0" || s.length == 0 || s.length == 1) {
    console.log("NO");
    return;
  }
  for (let len = 1; len < parseInt(s.length); len++) {
    temp = s.substr(0, len);
    // console.log(temp);
    number = temp;
    str = "";
    while (str.length < s.length) {
      str += number;
      number = BigInt(number) + BigInt(1);
    }
    if (str === s) {
      console.log(`YES ${temp}`);
      valid = true;
      break;
    }
  }
  if (!valid) {
    console.log("NO");
  }
}
