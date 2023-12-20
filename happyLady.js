function happyLadybugs(b) {
  // Write your code here
  //find the free index
  if (check(b)) return "YES";

  for (let i = 0; i < b.length; i++) {
    if (b[i] === "_") {
      let color = b[i - 1];
      let j = i + 1;
      while (true) {
        if (j === i) {
          break;
        }
        if (color === b[j]) {
          let temp = b[j];
          b[j] = b[i];
          b[i] = temp;
          break;
        }
        j = (j + 1) % b.length;
      }
      if (check(b)) {
        break;
      }
    }
  }

  if (check(b)) {
    return "YES";
  } else {
    return "NO";
  }

  //add the colour which is  in i-1
  //check the array
  //if i+1 is same then
}

function check(b) {
  let flag = true;
  let i = 0;
  while (i < b.length) {
    if (i >= b.length - 1) {
      break;
    }
    if (b[i] === b[i + 1]) {
      i = i + 2;
    } else if (b[i] === b[i - 1]) {
      i++;
    } else {
      flag = false;
      break;
    }
  }

  if (flag === false) {
    return false;
  } else {
    return true;
  }
}

happyLadybugs(["R", "B", "Y", "_", "Y", "B", "R"]);
// happyLadybugs(["R", "R", "Y", "Y", "B", "B", "_"]);
