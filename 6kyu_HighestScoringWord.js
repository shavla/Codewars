function high(x){
  let each = x.split(" ");
  let sum = 0;
  let arr = [];
  for(let i = 0; i < each.length; i++){
    for(let j = 0; j < each[i].length; j++){
      sum += each[i].charCodeAt(j) - 96;  
    }
    arr.push(sum);
    sum = 0;
  }
  let max = Math.max.apply(Math, arr);
  return each[arr.indexOf(max)];
}
