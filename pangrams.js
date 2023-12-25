function pangrams(s) {
  // Write your code here
  //   s = s.trim().split(" ").join("");
  //   let arr = s.split("").map((i) => console.log(i));
  //   let alphabets = [];
  //   for (let i = 65; i <= 90; i++) {
  //     alphabets.push(i);
  //   }
  //   console.log(alphabets);
  //   s = s
  //     .split("")
  //     .filter((i) => i !== " ")
  //     .map((i) => i.toUpperCase());
  //   s = s
  //     .split("")
  //     .filter((i) => i !== " ")
  //     .map((i) => i.toUpperCase())
  //     .join("");
  //   s = s.split("").map((i) => i.charCodeAt(i));
  //   //   console.log(s);
  //   let flag = true;
  //   for (let i in alphabets) {
  //     console.log(s.includes(alphabets[i]));
  //   }
  let count = 0;
  //   s = s
  //     .split("")
  //     .map((i) => {
  //       if (i !== " ") {
  //         return i;
  //       }
  //     })
  //     .join("");
  //   s = s
  //     .split("")
  //     .map((i) => i.toUpperCase())
  //     .map((i) => i.charCodeAt(i));
  s = s
    .split("")
    .map((i) => {
      if (i !== " ") {
        return i;
      }
    })
    .join("")
    .split("")
    .map((i) => i.toUpperCase())
    .map((i) => i.charCodeAt(i));

  //find unique elements
  let unique = [];
  for (let i in s) {
    if (!unique.includes(s[i])) {
      unique.push(s[i]);
    }
  }
  //   console.log(unique);
  //   console.log(unique.length);
  if (unique.length === 26) {
    return "pangram";
  } else {
    return "not pangram";
  }
  //if length of unique elements is 26 then panagram
  //   console.log(s);
}

pangrams("We promptly judged antique ivory buckles for the next prize");
