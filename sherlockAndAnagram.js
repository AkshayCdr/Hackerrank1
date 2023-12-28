function sherlockAndAnagrams(s) {
  // Write your code here
  //find substrings
  //find unique letter and increase count
  //find wheather substring are anagram pair or not

  //   for (let i in s) {
  //     console.log(s.substring(0, i));
  //   }
  let frquencymap = {};

  for (let i = 0; i <= s.length; i++) {
    //     let substr = s.substring(0, i);
    //     if (frquencymap[substr]) {
    //       frquencymap[substr]++;
    //     } else {
    //       frquencymap[substr] = 1;
    //     }
    //   }
    for (let j = i + 1; j <= s.length; j++) {
      //   console.log(s.substring(i, j));
      let substr = s.substring(i, j);
      let sortedSubstr = substr.split("").sort().join("");
      if (frquencymap[sortedSubstr]) {
        frquencymap[sortedSubstr]++;
      } else {
        frquencymap[sortedSubstr] = 1;
      }
    }
  }
  let anagramPairs = 0;
  for (let i in frquencymap) {
    // // console.log(frquencymap[i] === 2);
    // if (frquencymap[i] === 2) {
    //   //   console.log(frquencymap[i]);
    //   count++;
    // }
    let count = frquencymap[i];
    anagramPairs += (count * (count - 1)) / 2;
    // console.log(count);
  }
  console.log(anagramPairs);
  //   console.log(frquencymap);
}

// sherlockAndAnagrams("abba");

// sherlockAndAnagrams("ifailuhkqq");

sherlockAndAnagrams("kkkk");
