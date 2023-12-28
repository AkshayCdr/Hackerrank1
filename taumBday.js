function taumBday(b, w, bc, wc, z) {
  // Write your code here
  //cost is
  //b*bc + w*wc = tt
  //find min cost by
  //when bc decreased - wc increase + z cost
  //set which is min
  //   let minCost = b * bc + w * wc;
  //   if (bc === wc) {
  //     return minCost;
  //   }
  //   let cost = 0;
  //   while (b >= 0 && w > 0) {
  //     if (bc < wc) {
  //       w--;
  //       b++;
  //       cost = b * bc + w * wc + z;
  //       if (cost < minCost) {
  //         minCost = cost;
  //       }
  //     } else {
  //       b--;
  //       w++;
  //       cost = b * bc + w * wc + z;
  //       if (cost < minCost) {
  //         minCost = cost;
  //       }
  //     }
  //   }
  //   return cost;

  //   const blackCost = Math.min(bc, wc + z);
  //   const whiteCost = Math.min(wc, bc + z);

  //   // Calculate the total cost considering minimum individual costs
  //   return b * blackCost + w * whiteCost;

  b = BigInt(b);
  w = BigInt(w);
  bc = BigInt(bc);
  wc = BigInt(wc);
  z = BigInt(z);

  let blackCost = BigInt(0);
  let whiteCost = BigInt(0);

  // Calculate individual costs without conversions
  blackCost = bc < wc + z ? b * bc : b * (wc + z);
  whiteCost = wc < bc + z ? w * wc : w * (bc + z);

  // Calculate the total cost considering minimum individual costs
  return blackCost + whiteCost;
}

console.log(taumBday(3, 5, 3, 4, 1));
