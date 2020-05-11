function SeriesSum(n){
  let sum = 0;
  for(let  i = 1; i <= n; i++){
    sum += 1 / (1 + (i - 1) * 3);
  }
  return sum.toFixed(2);
}
