function sumTwoSmallestNumbers(numbers) {  
  let sum = numbers.sort(function(a, b){return a - b});
  return sum[0] + sum[1];
}
