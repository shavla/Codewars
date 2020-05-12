function isIsogram(str){
  let newStr = str.toLowerCase()
  let each = newStr.split("").sort().join("");
  for(let i = 0; i < each.length; i++){
    if(each[i] == each[i+1]) return false;
  }
  return true;
}
