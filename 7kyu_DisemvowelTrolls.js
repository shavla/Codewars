function disemvowel(str) {
  let each = str.split(""); 
  let result = "";
  for(let i = 0; i < each.length; i++){
    if(each[i] == 'a'||each[i] == 'e'||each[i] == 'i'||each[i] == 'o'||each[i] == 'u'
    || each[i] == 'A'||each[i] == 'E'||each[i] == 'I'||each[i] == 'O'||each[i] == 'U') continue;
    result += each[i];
  }
  return result;
}
