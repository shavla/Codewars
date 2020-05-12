function findEvenIndex(arr){
  let first = 0;
  for(let i = 1; i < arr.length; i++){
    first += arr[i];
  }if(first == 0) return 0;
  let last = 0;
  for(let i = 0; i < arr.length - 1; i++){
    last += arr[i];
  }if(last == 0) return  arr.length - 1;
  let left = 0;
  let right = 0;
  for(let index = 1; index < arr.length - 1; index++){
      for(let i = 0; i < index; i++){
        left += arr[i];
      }
      for(let j = index + 1; j < arr.length; j++){
        right += arr[j];
      }
      if(left == right) return index;
      left = 0;
      right = 0;
  }
  return -1;
}
