snail = function(array) {
 const sorted = []
  while(array.length){
    sorted.push(...array.shift())
    for(let i=0; i<array.length; i++){
      sorted.push(array[i].pop())
    }
    sorted.push(...(array.pop() || []).reverse())
    for(let i=array.length-1; i>=0; i--){
      sorted.push(array[i].shift())
    }
  }
  return sorted;
}
