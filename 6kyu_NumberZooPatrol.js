function findNumber(array) {
  let sum = 0;
  let exSum = 0;
  for(let i = 0; i < array.length; i++) {
    exSum+=array[i];
    sum+=(i + 1);
  }
  return sum + (array.length + 1) - exSum;
}
