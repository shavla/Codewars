var buy = function(x, arr){
  let result = [];
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
      let sum = arr[i] + arr[j];
      if(sum == x){
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
  return null;
};
