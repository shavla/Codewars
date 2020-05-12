function positiveSum(arr) {
  if(arr.length ==0) return 0;
  let sum = 0;
  for( let i = 0; i < arr.length; i++){
    if(arr[i] > 0) sum += arr[i];
    else continue;
  }
  return sum;
}
