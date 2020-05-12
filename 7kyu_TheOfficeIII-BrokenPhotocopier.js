function broken(x){
  let n = "";
  for(let i = 0; i < x.length; i++){
    if(x.charAt(i) == '1') n += "0";
    else n += "1";
  }
  return n;
}
