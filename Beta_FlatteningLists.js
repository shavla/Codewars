function flatten(l){
  let arr = []; 
  for(let i = 0; i < l.length; i++){
    for(let j = 0; j < l[i].length; j++){
      arr.push(l[i][j]);
    }
  }
  return arr;
}
