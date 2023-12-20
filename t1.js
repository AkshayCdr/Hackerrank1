let arr = ["1112", "1912", "1892", "1234"];

// arr = arr[0].split("").map((i) => parseInt(i));
arr = arr.map((i) => i.split("").map((i) => parseInt(i)));
console.log(arr);

arr = arr.map((i) => i.join(""));
console.log(arr);
