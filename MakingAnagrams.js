// function makingAnagrams(s1, s2) {
//   // Write your code here
//   if (s1 === s2) {
//     return 0;
//   }
//   //   let length = s1.concat(s2).length;
//   //   console.log(length);
//   //find same letters from each string
//   //find the count of non same letters
//   //   let res = s1.split("").filter((i) => s2.includes(i)).length;
//   let res = s1.split("").filter((i) => s2.includes(i)).length;
//   let firstlength = s1.length - res;
//   let secondlength = s2.length - res;
//   let sum = firstlength + secondlength;
//   console.log(firstlength + secondlength);
//   console.log(res);
//   //   console.log(length - res * 2);
// }
function makingAnagrams(s1, s2) {
  const frequencyMap = {};

  // Count the frequency of characters in s1
  for (let char of s1) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  // Subtract the frequency of characters in s2 from the frequency map
  for (let char of s2) {
    frequencyMap[char] = (frequencyMap[char] || 0) - 1;
  }

  // Calculate the total deletions required
  let deletionsRequired = 0;
  for (let key in frequencyMap) {
    deletionsRequired += Math.abs(frequencyMap[key]);
  }

  console.log(deletionsRequired);
}

makingAnagrams(
  "absdjkvuahdakejfnfauhdsaavasdlkj",
  "djfladfhiawasdkjvalskufhafablsdkashlahdfa"
);
