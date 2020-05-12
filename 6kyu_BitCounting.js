var countBits = function(n) {
  let bin = n.toString(2);
  let sum = 0;
  for(let i = 0; i < bin.length; i++){
     if(bin[i] == 1) sum++;
  }
  return sum;
};
