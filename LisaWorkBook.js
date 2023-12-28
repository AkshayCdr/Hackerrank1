function workbook(n, k, arr) {
  // Write your code here
  //current page
  //next page is current page +3
  let specialProblem = 0;
  let pageNumber = 1;
  for (let i of arr) {
    let currentPage = 1;
    while (i) {
      let maxProblemPerPage = Math.max(k, i);
      let startProblem = currentPage;
      let endProblem = currentPage + maxProblemPerPage - 1;

      if (pageNumber >= startProblem && pageNumber <= endProblem) {
        specialProblem++;
      }
      currentPage += k;
      i -= maxProblemPerPage;
      pageNumber++;
    }
  }
  return specialProblem;
}

workbook(5, 3, [4, 2, 6, 1, 10]);
