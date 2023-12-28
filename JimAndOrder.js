function jimOrders(orders) {
  // Write your code here
  //   console.log(orders[0][1]);
  //   let time = [];
  //   let index = [];
  //   let k = 1;
  //   for (let i of orders) {
  //     // console.log(i[1]);
  //     let sum = 0;
  //     for (let j in i) {
  //       //   console.log(i[j]);
  //       sum += i[j];
  //     }
  //     time.push(sum);
  //     index.push(k);
  //     k++;
  //   }
  //   //   console.log(time);
  //   //   console.log(index);
  //   for (let i = 0; i < time.length; i++) {
  //     for (let j = i + 1; j < time.length; j++) {
  //       if (time[j] < time[i]) {
  //         // swap(time[j], time[i]);
  //         let temp1 = time[i];
  //         time[i] = time[j];
  //         time[j] = temp1;
  //         // swap(index[j], index[i]);
  //         let temp2 = index[i];
  //         index[i] = index[j];
  //         index[j] = temp2;
  //       }
  //     }
  //   }
  //   console.log(time);
  //   console.log(index);

  const servingTimes = orders.map((order, index) => {
    const [prep, serve] = order;
    return { index: index + 1, time: prep + serve };
  });

  // Sort orders based on serving time, and then by their original index
  servingTimes.sort((a, b) => {
    if (a.time !== b.time) {
      return a.time - b.time;
    }
    return a.index - b.index;
  });

  // Return the sorted order indices
  return servingTimes.map((order) => order.index);
}

// function swap(x, y) {
//   let temp = x;
//   x = y;
//   y = temp;
// }

jimOrders([
  [8, 1],
  [4, 2],
  [5, 6],
  [3, 1],
  [4, 3],
]);
