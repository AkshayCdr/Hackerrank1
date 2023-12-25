function encryption(s) {
  let str = s.split(" ").join("");
  let length = s.split(" ").join("").length;
  let rslt = [];
  let result = "";
  let row = Math.floor(Math.sqrt(length));
  let col = Math.ceil(Math.sqrt(length));
  let rowcol = row * col;
  console.log(Math.sqrt(length));
  while (rowcol <= length) {
    row = row + 1;
    rowcol = row * col;
  }
  let k = 0;
  for (let i = 0; i < row; i++) {
    rslt[i] = [];
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      rslt[i][j] = str[k];
      k++;
    }
  }
  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      console.log(rslt[i][j]);
      if (rslt[i][j] !== undefined) {
        result += rslt[i][j];
      }
    }
    result += " ";
  }
  //   console.log(rslt);
  console.log(result);
}

encryption("chillout");
