function countLanguages(list) {
  let count = [];
  for(let i = 0; i < list.length; i++){
    count.push(list[i].language);
  }
  let obj = {};
  count.forEach(function(i) { obj[i] = (obj[i]||0) + 1;});
  return obj;
}
