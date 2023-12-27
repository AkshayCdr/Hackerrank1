// function theLoveLetterMystery(s) {
//   // Write your code here
//   let i = 0;
//   let count = 0;
//   while (!isPalindrome(s)) {
//     const charCodeFront = s.charCodeAt(i);
//     const charCodeBack = s.charCodeAt(s.length - 1 - i);

//     if (charCodeFront < charCodeBack) {
//       s =
//         s.substring(0, i) +
//         String.fromCharCode(charCodeBack - 1) +
//         s.substring(i + 1);
//     } else {
//       s =
//         s.substring(0, s.length - 1 - i) +
//         String.fromCharCode(charCodeFront - 1) +
//         s.substring(s.length - i);
//     }
//     count++;
//   }
//   i++;
// }

// function isPalindrome(s) {
//   return s === s.split("").reverse().join("");
// }

function theLoveLetterMystery(s) {
  let operations = 0;
  const len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    const frontCharCode = s.charCodeAt(i);
    const backCharCode = s.charCodeAt(len - 1 - i);

    operations += Math.abs(frontCharCode - backCharCode);
  }

  return operations;
}
