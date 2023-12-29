function organizingContainers(container) {
  // Write your code here
  //   for (let i of container) {
  //     // console.log(i);
  //     for (let j in i) {
  //       console.log(i[j]);

  //     }
  //   }

  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < container.length; j++) {
      console.log(container[i][j]);
    }
    console.log("\n");
  }
}

organizingContainers([
  [1, 3, 1],
  [2, 1, 2],
  [3, 3, 3],
]);
