function inArray(array1,array2){
  let res = [];
  for(let i = 0; i < array2.length; i++){
    for(let item of array1){
      if(array2[i].includes(item)) res.push(item);
    }
  }
  let set = new Set();
  for(let it of res){
    set.add(it);
  }
  return Array.from(set).sort();
}
