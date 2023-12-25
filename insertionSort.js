function insertionSort2(arr) {
  //   let result = "";
  //   let i, key, j;
  //   for (i = 1; i < arr.length; i++) {
  //     key = arr[i];
  //     j = i - 1;
  //     while (j >= 0 && arr[j] > key) {
  //       arr[j + 1] = arr[j];
  //       j = j - 1;
  //     }
  //     arr[j + 1] = key;
  //     arr.map((i) => console.log(i));
  //   }

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
    console.log(arr.join(" "));
  }
  //   console.log(arr);
}

insertionSort2([5, 1, 2, 4, 76, 4]);
