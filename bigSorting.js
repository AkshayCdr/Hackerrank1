function bigSorting(unsorted) {
  let sorted = unsorted.sort((a, b) => {
    if (a.length === b.length) {
      BigInt(a) - BigInt(b);
    } else {
      a.length - b.length;
    }
  });
  console.log(sorted);
}

bigSorting([
  8, 1, 2, 100, 12303479849857341718340192371, 3084193741082937,
  3084193741082938, 111, 200,
]);
