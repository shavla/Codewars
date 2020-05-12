function friend(friends){
  let result = [];
  for(let item of friends){
    if(item.length == 4) result.push(item);
  }
  return result;
}
