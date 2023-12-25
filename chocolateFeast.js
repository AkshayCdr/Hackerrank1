// function chocolateFeast(n, c, m) {
//   // Write your code here
//   let numberOfCandy = 0;
//   let sumOfCandy = 0;
//   let wrapper = 0;
//   numberOfCandy = Math.floor(n / c);
//   wrapper = numberOfCandy;
//   while (wrapper >= m) {
//     sumOfCandy += numberOfCandy;
//     numberOfCandy = Math.floor(wrapper / m);
//     wrapper = (wrapper % m) + numberOfCandy;
//   }
//   return sumOfCandy;
// }

function chocolateFeast(n, c, m) {
  let totalChocolates = Math.floor(n / c);
  let wrappers = totalChocolates;

  while (wrappers >= m) {
    const newChocolates = Math.floor(wrappers / m);
    totalChocolates += newChocolates;
    wrappers = (wrappers % m) + newChocolates;
  }

  return totalChocolates;
}

chocolateFeast(15, 3, 2);
