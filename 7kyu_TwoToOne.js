function longest(s1, s2) {
  let str = s1 + s2;
  str = str.split("").sort();
  let result = new Set();
  for(let each of str){
      result.add(each);
  }
  result = Array.from(result);      
  return result.join("");
}
