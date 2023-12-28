function happyLadybugs(b) {
  // Write your code here
  //   let frequency = {};
  //   let result = "";
  //   let count = 0;
  //   let s = b.split("").map((i) => (frequency[i] = (frequency[i] || 0) + 1));
  //   for (let i in frequency) {
  //     if (!frequency.hasOwnProperty("_")) {
  //       result += "No";
  //       return result;
  //     }
  //     if (frequency[i] < 2) {
  //       result += "No";
  //       return result;
  //     }
  //   }
  //   for (let i = 0; i < b.length; i++) {
  //     if (b[i] === b[i + 1] || b[i - 1] === b[i]) {
  //     } else {
  //       result += "No";
  //       return result;
  //     }
  //   }
  //   result += "Yes";
  //   return result;
  let freq = {};
  let empty = false;
  let happy = true;

  for (let i = 0; i < b.length; i++) {
    if (b[i] === "_") {
      empty = true;
    } else {
      freq[b[i]] = freq[b[i]] + 1 || 1;
    }
  }

  for (let key in freq) {
    if (freq[key] === 1) {
      happy = false;
    }
  }

  if (!happy) {
    return "NO";
  }

  if (empty) {
    return "YES";
  }

  for (let i = 1; i < b.length - 1; i++) {
    if (b[i] !== b[i - 1] && b[i] !== b[i + 1]) {
      return "NO";
    }
  }

  return "YES";
}

// happyLadybugs("DD__FQ_QQF");
console.log(happyLadybugs("DDFQQQF"));
