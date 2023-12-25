function countingSort(arr) {
  const max = Math.max(...arr); // Find the maximum element in the array
  const countArray = Array(max + 1).fill(0); // Create a count array filled with zeros

  // Count occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]]++;
  }

  // Reconstruct the sorted array
  let sortedArray = [];
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      sortedArray.push(i);
      countArray[i]--;
    }
  }

  return sortedArray;
}

countingSort([1, 1, 3, 2, 1]);
