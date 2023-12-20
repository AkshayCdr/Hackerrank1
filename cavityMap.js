function cavityMap(grid) {
  grid = grid.map((i) => i.split("").map((i) => parseInt(i)));
  let row = grid.length;
  let column = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (isNotInBorder(i, j, row, column)) {
        // console.log(grid[i][j]);
        //find adjacent of each element
        let adj = findAdj(grid, i, j, row, column);
        // console.log(adj);
        let max = Math.max(...adj);
        let cavity = parseInt(grid[i][j]);
        if (cavity > max) {
          grid[i][j] = "X";
        }
        // console.log(typeof grid[i][j]);
        // console.log(typeof max);

        // console.log(max);
        //if it is all < grid[i][j] set it to x
      }
    }
    // console.log("\n");
  }
  //   console.log(grid);
  grid = grid.map((i) => i.join(""));
  return grid;
}

function isNotInBorder(row, col, nRows, nCols) {
  return row != 0 && col != 0 && row != nRows - 1 && col != nCols - 1;
}

function findAdj(grid, row, col, nRows, nCols) {
  let ajs = [];
  if (row > 0) {
    // console.log(grid[row - 1][col]);
    ajs.push(grid[row - 1][col]);
  }
  if (col > 0) {
    // console.log(grid[row][col - 1]);
    ajs.push(grid[row][col - 1]);
  }
  if (col < nCols - 1) {
    // console.log(grid[row][col + 1]);
    ajs.push(grid[row][col + 1]);
  }
  if (row < nRows - 1) {
    // console.log(grid[row + 1][col]);
    ajs.push(grid[row + 1][col]);
  }
  return ajs;
}

cavityMap(["1112", "1912", "1892", "1234"]);
