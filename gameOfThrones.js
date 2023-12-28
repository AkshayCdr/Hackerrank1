// function gameOfThrones(s) {
//   // Write your code

//   const frequency = {};

//   // Count the frequency of characters in the string
//   for (let char of s) {
//     frequency[char] = (frequency[char] || 0) + 1;
//   }

//   let oddCount = 0;

//   // Check the count of characters with odd frequency
//   for (let count in frequency) {
//     if (frequency[count] % 2 !== 0) {
//       oddCount++;
//     }
//   }

//   // Determine if it's possible to form a palindrome
//   if (
//     (s.length % 2 === 0 && oddCount === 0) ||
//     (s.length % 2 !== 0 && oddCount === 1)
//   ) {
//     return "YES";
//   } else {
//     return "NO";
//   }
// }

function gameOfThrones(s) {
  const charCount = {};

  // Count the frequency of characters in the string
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;

  // Check if there is more than one character with an odd count
  for (let count in charCount) {
    if (charCount[count] % 2 !== 0) {
      oddCount++;
    }
  }

  // If there's more than one odd-count character, palindrome is not possible
  return oddCount > 1 ? "NO" : "YES";
}

console.log(gameOfThrones("aabbccd"));
