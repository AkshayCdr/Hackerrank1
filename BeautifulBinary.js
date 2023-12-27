// function beautifulBinaryString(b) {
//   // Write your code here
//   //   console.log(b.includes("010"));
//   //   console.log(b.indexOf("010"));
//   let count = 0;
//   while (b.includes("010")) {
//     b = b.replace("010", "x");
//     count++;
//   }
//   console.log(count);
// }

const substring = "010";
let count = 0;

for (let i = 0; i < b.length - 2; i++) {
  if (b.substring(i, i + 3) === substring) {
    count++;
    i += 2; // Skipping two characters ahead after replacing "010"
  }
}

return count;

beautifulBinaryString("0100101010");
