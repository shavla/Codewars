function squareDigits(num){
  let each = num.toString().split("");
  let result = "";
  for(let i = 0; i < each.length; i++){
    result += each[i] * each[i];
  }
  return Number(result);
}
