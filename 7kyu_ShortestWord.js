function findShort(s){
  let each = s.split(" ");
  let min = each[0].length;
  for(let i = 1; i < each.length; i++){
    if(each[i].length < min){
      min = each[i].length ;
    }
  }
  return min;
}
