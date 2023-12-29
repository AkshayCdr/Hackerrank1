function maximumToys(prices, k) {
  //   // Write your code here
  //   prices = prices.filter((i) => i <= k).sort((a, b) => a - b);
  //   let result = [];
  //   let sum = 0;
  //   console.log(prices);
  //   let l = 0;
  //   for (let i = 0; i <= prices.length; i++) {
  //     let temp = prices.slice(0, i);
  //     // console.log(typeof temp);
  //     if (temp.length > 0) {
  //       sum += Number(temp[l]);
  //       if (sum <= k) {
  //         result.push(temp[l]);
  //       }
  //       l++;
  //     }
  //   }
  //   //   console.log(prices.slice(0, 4));
  //   console.log(result);
  prices.sort((a, b) => a - b);
  let count = 0;
  let totalCost = 0;

  // Calculate the number of toys Mark can buy within the budget
  for (let price of prices) {
    totalCost += price;
    if (totalCost <= k) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

maximumToys([1, 12, 5, 111, 200, 1000, 10], 50);
