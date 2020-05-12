function descendingOrder(n){
  if(n < 10) return n;
  let result="";
  let each = n.toString().split("");
  each.sort(function(a, b){return b - a});
  for(let i = 0; i < each.length; i++){
    result += each[i];
  }
  return Number(result);
}
