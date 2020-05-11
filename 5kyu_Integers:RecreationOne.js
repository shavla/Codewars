function listSquared(m, n) {
  let arr = [];
  for(let i = m; i <= n; i++){
    let sum = 0; 
    let next = [];
    for(let j = 1; j <= i; j++){
      if(i % j == 0){
        sum += j * j;
      }
    }
    if(Number.isInteger(Math.sqrt(sum))){
      next.push(i);
      next.push(sum);
      arr.push(next);
    }
  }
  return arr;
}
