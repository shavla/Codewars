var isSquare = function(n){
  if(n < 0) return false;
  if(n == 0) return true;
  for( let  i = 1; i <= n; i++){
    if(i * i == n) return true;
    else continue;
  }
  return false;
}
