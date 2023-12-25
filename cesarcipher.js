// function cipher(s) {
//   console.log(s.charCodeAt(s));
//   console.log(String.fromCharCode(97));
// }

// function cipher(s) {
//   // console.log(s.charCodeAt(s));
//   // console.log(String.fromCharCode(97));
//   let k = s.split("").map((i) => {
//     if(typeof(i) === 'string'){
//         (i.charCodeAt(i)+3)%
//     }
//   });
//   console.log(k);
// }

function caesarCipher(s, k) {
  // Write your code here
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (
      (s.charCodeAt(i) <= 90 && s.charCodeAt(i) >= 65) ||
      (s.charCodeAt(i) <= 122 && s.charCodeAt(i) >= 97)
    ) {
      let isUpperCase = s[i] === s[i].toUpperCase();
      charCode = charCode + k;
      if ((isUpperCase && charCode > 90) || (!isUpperCase && charCode > 122)) {
        charCode -= 26;
      } else if (
        (isUpperCase && charCode < 65) ||
        (!isUpperCase && charCode < 97)
      ) {
        charCode += 26;
      }

      result += String.fromCharCode(charCode);
    } else {
      result += s[i]; // Keep non-alphabetic characters unchanged
    }
  }
  console.log(result);
  // console.log(typeof s.charCodeAt(i));
}

caesarCipher("joldldldld", 3);
