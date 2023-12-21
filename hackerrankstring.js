function hackerrankInString(s) {
  // Write your code here
  let stack = [];
  let str = "hackerrank";
  let rslt = s.split("").filter((i) => str.indexOf(i) !== -1);
  //push this to stack if the current stack top is same dont push
  for (let i of rslt) {
    if (stack[stack.length - 1] !== i) {
      stack.push(i);
    }
  }
  console.log(rslt);
  console.log(stack);
}

hackerrankInString("hhaacckkekraraannk");
