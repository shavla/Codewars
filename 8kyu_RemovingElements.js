function removeEveryOther(arr){
  let res = [];
  for (let i = 0; i < arr.length; i+=2) {
    res.push(arr[i]);
  };
  return res;
}
