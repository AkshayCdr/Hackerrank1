// function gemstones(arr) {
//   // Write your code here
//   //take unique elements
//   //check wheather it is present in each string
//   let sum = arr.reduce((acc, ele) => {
//     return acc + ele;
//   }, "");
//   let unique = new Set(sum);
//   //   console.log(unique);
//   let temp = 0;
//   let count = 0;
//   for (let i of unique) {
//     for (let j of arr) {
//       if (!j.includes(i)) {
//         break;
//       }
//       temp++;
//       //   console.log(`${j} ${i}`);
//       //   console.log(j.includes(i));
//     }
//     if (temp === arr.length) {
//       count++;
//     }
//   }
//   console.log(count);
// }

function gemstones(arr) {
  let gemSet = new Set(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const gemstones = new Set(arr[i]);
    //converted gemset to array filter -> check wheather first array and second
    //array has same elements
    gemSet = new Set([...gemSet].filter((gem) => gemstones.has(gem)));
  }
  console.log(gemSet.size);
}

gemstones(["abcdde", "baccd", "eeabg"]);
