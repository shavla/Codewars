function rowSumOddNumbers(n) {
  let first = 1 + (n - 1) * n;
  let sum = 0;
  for(let i = 0; i < n; i++){
    sum += first;
  }
  sum += n * (n - 1);
  return sum;
}
