function jumpingOnClouds(c, k) {
  //   console.log(c);
  let i = 0;
  let energy = 100;
  while (true) {
    i = (i + k) % c.length;
    if (c[i] === 1) {
      energy -= 3;
    } else {
      energy -= 1;
    }
    if (i === 0) {
      break;
    }
  }
  console.log(energy);
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2);
