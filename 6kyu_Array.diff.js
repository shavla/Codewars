function arrayDiff(a, b) {
  if(a.length == 0) return [];  
  if(b.length == 0) return a;
  a = a.filter(function(item) {
    return !b.includes(item); 
  });
  return a;
}
