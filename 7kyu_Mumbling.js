function accum(s) {
let str = "";
  for(let  i = 0; i < s.length; i++){
    str += "-" + s[i].toUpperCase() ;
    for(let j = 0; j < i;j++){
      str += s[i].toLowerCase();
    }
  }
  str = str.substring(1);
  return str; 
}
