function josephus(items,k){
  let res = [];
  let n = items.length;
  let ind = 0;
  while (res.length < n)
  {
    ind = (ind + k-1) % items.length;
    res.push(items[ind]);
    items.splice(ind, 1);
  }
  return res;
}
