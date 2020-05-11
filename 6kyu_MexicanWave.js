function wave(str){
  let arr = [];
  for(let i = 0; i < str.length; i++){
    let each = str.split("");
    if (each[i] === ' ') {
      continue;
    }
    each[i] = each[i].toUpperCase();
    arr.push(each.join(""));
  }
  return arr;
}
