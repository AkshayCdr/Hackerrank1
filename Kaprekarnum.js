function kaprekarNumbers(p, q) {
  // Write your code here
  let result = "";
  let foundKaprekar = false;
  for (let i = p; i <= q; i++) {
    if (kaprekar(i)) {
      foundKaprekar = true;
      result += i + " ";
    }
  }
  console.log(result);
  if (!foundKaprekar) {
    console.log("INVALID RANGE");
  }
}

function kaprekar(num) {
  let square = Math.pow(num, 2);
  //   console.log(square);
  //   let firstnum = num.toString().slice(0, num.length / 2);
  let mid = square.toString().length / 2;
  let firstnum = square.toString().slice(0, mid);
  let secondNumber = square.toString().slice(mid);
  let sum = Number(firstnum) + Number(secondNumber);
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}

// function isKarpekarNumber(p) {
//   const squared = BigInt(p) * BigInt(p);
//   const squaredStr = squared.toString();

//   for (let i = 1; i < squaredStr.length; i++) {
//     const leftPart = BigInt(squaredStr.slice(0, i));
//     const rightPart = BigInt(squaredStr.slice(i));

//     if (leftPart + rightPart === BigInt(p)) {
//       return true;
//     }
//   }
//   return false;
// }

// kaprekarNumbers(1, 100);

kaprekar(99999);
