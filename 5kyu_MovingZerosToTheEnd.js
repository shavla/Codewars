var moveZeros = function (arr) {
  let add = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      arr.push(arr.splice(arr.indexOf(0), 1)[0]);
    }
  }
  return arr;
}
