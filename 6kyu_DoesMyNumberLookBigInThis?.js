function narcissistic(value) {
  let n = value.toString().length;
  let sum = 0;
  for(let i = 0; i < n; i++){
    sum += Math.pow( value.toString()[i], n);
  }
  if(sum == value) return true;
  return false;
}
