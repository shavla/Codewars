function asteriscIt(n) { 
  if(Array.isArray(n)){
    n = n.join("");
  }
  let m = n.toString();
  let num = n.toString().length;
  let result = "";
  for(let i = 0; i < num ; i++){
    if(m[i] % 2 == 0 && m[i+1] % 2 == 0){
      result += m[i] + "*";
      continue;
    }
    result += m[i];
  }
  return result;
};
