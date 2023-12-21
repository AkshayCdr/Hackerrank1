// function camelcase(s) {
//   // Write your code here

//   if (s) {
//     count = 1;
//   } else {
//     return 0;
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (isUpper(s.charAt(i))) {
//       console.log(`this is upper ${s[i]} ${i}`);
//       count++;
//     }
//   }
//   console.log(count);
// }

// function isUpper(char) {
//   return char === char.toUpperCase();
// }

// camelcase("saveChangesInTheEditor");

function camelcase(s) {
  // Write your code here

  //   let count = s.split("").filter((i) => i === i.toUpperCase()).length + 1;
  //   console.log(count);
  console.log(s.split("").filter((i) => i === i.toUpperCase()).length + 1);
}

camelcase("");

// let count =0
// if (s) {
//   count = 1;
// } else {
//   return 0;
// }
// for (let i = 0; i < s.length; i++) {
//   if (isUpper(s.charAt(i))) {
//     count++;
//   }
// }
// return count
