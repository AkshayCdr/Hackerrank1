function marcsCakewalk(calorie) {
  // Write your code here
  calorie = calorie.sort((a, b) => b - a);
  console.log(calorie);
  let j = 0;
  let sum = 0;
  while (j < calorie.length) {
    sum += Math.pow(2, j) * calorie[j];
    j++;
  }
  console.log(sum);
  //   return sum;
}

marcsCakewalk([7, 4, 9, 6]);
