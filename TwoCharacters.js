class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Undreflow";
    }
    return this.item.shift();
  }
  peek() {
    return this.item[0];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  printQueue() {
    return this.items;
  }
}

// function alternate(s) {
//   // Write your code here
//   //filter unique elements from the array
//   //take two unique elements from the array
//   //loop through array
//     //peek first element from queue check
//      //if it is eqal pop the element and insert new element
//      //if it is not element
// }

function alternate(s) {
  let uniqueele = [];
  let maxLength = 0;

  for (let i in s) {
    if (!uniqueele.includes(s[i])) {
      uniqueele.push(s[i]);
    }
  }
  //   console.log(uniqueele);
  for (let i = 0; i < uniqueele.length; i++) {
    for (let j = i + 1; j < uniqueele.length; j++) {
      console.log(`${uniqueele[i]} ${uniqueele[j]}`);
      let filtered = s
        .split("")
        .filter((char) => char === uniqueele[i] || char === uniqueele[j]);
      console.log(filtered);

      let isValid = true;

      for (let k = 0; k < filtered.length - 1; k++) {
        if (filtered[k] === filtered[k + 1]) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        maxLength = Math.max(maxLength, filtered.length);
      }
    }
  }
  console.log(maxLength);
  return maxLength;
}

alternate("beabeefeab");
