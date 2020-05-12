function moreZeros(s){
  let each = s.split("");
  let result = [];
  let res = [];
  let count = 0;
  for(let  i = 0; i < each.length; i++){
    result.push(each[i].charCodeAt(0).toString(2));
    for(let j = 0; j < result[i].length; j++){
      if(result[i][j] == 0) count++;
    }
    if(count > result[i].length - count) res.push(each[i]);
    count = 0;
  }
  let set = new Set();
  for(let k = 0; k < res.length; k++){
    set.add(res[k]);
  }
  return Array.from(set);
}
