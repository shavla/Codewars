function getMinMax(arr){
  let array = [];
  array.push(Math.min(...arr));
  array.push(Math.max(...arr));
  return array;
};
