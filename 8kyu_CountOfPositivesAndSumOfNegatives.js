function countPositivesSumNegatives(input) {
  if(input == null || input == NaN || input.length == 0) return [];
  let sum = 0;
  let quantitu = 0;
  for(let i = 0; i < input.length; i++){
    if(input[i] <= 0){
      sum += input[i];
    }
    else quantitu++;
  }
  return [quantitu,sum];
}
