function isTriangle(a,b,c){
  let arr = [];
  arr.push(a,b,c);
  arr.sort(function (a,b) { return a - b});
  if(arr[0] + arr[1] > arr[2]) return true;
  else return false;
}
