function solution(n, m){
  let result = [];
  for(let a = 0; a <= n; a++){
    for(let b = 0; b <= m; b++){
      let arr = [];
      if((a * a + b) == n && (a + b * b) == m){
        arr.push(a);
        arr.push(b);
        result.push(arr);
      }
    }
  }
  return result.length;
}
