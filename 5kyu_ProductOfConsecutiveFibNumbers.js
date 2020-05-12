function productFib(prod){
  let zero = 0;
  let one = 1;
  let two = 0;
  let mul = 1;
  let arr = [];
  while(true){
    mul = 1;
    two = zero + one;
    mul = one * two;
    if(mul == prod){
      arr.push(one);
      arr.push(two);
      arr.push(true);
      break;
    }
    if(mul > prod){
      arr.push(one);
      arr.push(two);
      arr.push(false);
      break;
    }
    zero = one;
    one = two; 
  }
  return arr;
}
