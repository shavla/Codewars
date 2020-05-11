function sumArray(array) {
  if(array === null || array.length == 0) return 0;
  let arr = array.sort(function (a,b) { return a-b});
  let sum = 0;
  for(let i = 1; i < arr.length-1; i++){
    sum += arr[i];
  }
  return sum;
}
