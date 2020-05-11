function myLanguages(results) {
  let res = [];
  let sortable = [];
  for (let each in results) {
    sortable.push([each, results[each]]);
  }
  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });
  for(let i in sortable){
    if(sortable[i][1] >= 60) res.push(sortable[i][0]);
  }
  return res;
}
