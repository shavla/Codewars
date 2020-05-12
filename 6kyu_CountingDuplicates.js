function duplicateCount(text){
  let str = text.toLowerCase().split("").sort();
  let count = {};
  let sum = 0;
  str.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  for(let i of Object.values(count)){
    if(i >= 2) sum++;
  }
  return sum;
}
