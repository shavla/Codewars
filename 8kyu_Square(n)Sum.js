function squareSum(numbers){
  let sum = 0;
  for(let it of numbers){
    sum += it * it;
  }
  return sum;
}
