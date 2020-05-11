function sumDigPow(a, b) {
  let arr = [];
  for(let i = a; i <= b; i++){
    let k = i.toString();
    let len = k.length;
    let num = 0;
    for(let j = 0; j < len; j++){
      num += k[j] ** (j + 1);
    }
    if(num == k) arr.push(i);
  }
  return arr;
}
