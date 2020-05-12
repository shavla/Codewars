function howmuch(m, n) {
  if(m == n) return [];
  if(m > n){
     let c = m;
     m = n;
     n = c;
  }
  let arr = [];
  for(let i = m; i <= n; i++){
    let newArr = [];
    let b = 0;
    let c = 0;
    if((i - 2) % 7 == 0) {
      b = (i - 2) / 7;
    }else continue;
    if((i - 1) % 9 == 0) {
      c = (i - 1) / 9;
    }else continue;
    newArr.push("M: " + i);
    newArr.push("B: " + b);
    newArr.push("C: " + c);
    arr.push(newArr);
  }
  return arr;
}
