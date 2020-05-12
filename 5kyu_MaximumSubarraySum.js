var maxSequence = function(arr){
  let sum = 0;
  let maximumSum = 0;
  for(let number of arr) {
    sum += number;
    if(sum > maximumSum) {
       maximumSum = sum;
     }
    if(sum < 0) {
       sum = 0;
    }
  }
  return maximumSum;
}
