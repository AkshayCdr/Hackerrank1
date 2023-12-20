// function fairRations(B) {
//   //take index of odd numbers
//   let indexofoddnumbers = [];
//   let count = 0;
//   let flag = false;
//   for (let i in B) {
//     if (B[i] % 2 !== 0) {
//       indexofoddnumbers.push(parseInt(i));
//     }
//   }
//   //add 1 to index and 2 before index
//   let j = 0;
//   for (let i in B) {
//     i = parseInt(i);
//     if (i === indexofoddnumbers[j]) {
//       B[i] += 1;
//       count++;
//       if (flag === false) {
//         B[i + 1] += 1;
//         count++;
//         flag = true;
//       } else {
//         B[i - 1] += 1;
//         count++;
//         flag = false;
//       }
//       j++;
//     }
//   }
//   let odd = B.filter((i) => i % 2 !== 0);

//   if (odd.length === 0) {
//     console.log(count);
//   } else {
//     console.log("NO");
//   }
// }

function fairRations(B) {
  // Write your code here
  let count = 0;
  let sum = B.reduce((acc, curr) => acc + curr, 0);
  if (sum % 2 !== 0) {
    return "NO";
  }
  for (let i in B) {
    if (B[i] % 2 !== 0) {
      B[i]++;
      B[i + 1]++;
      count += 2;
    }
  }
  return count;
}

console.log(fairRations([2, 3, 4, 5, 6]));

// fairRations();
// fairRations([1, 2]);
