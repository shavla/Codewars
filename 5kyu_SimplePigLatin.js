function pigIt(str){
  let each = str.split(" ");
  for(let i = 0; i < each.length; i++){
    if(each[i] == "?" || each[i] == "!") continue;
    let first = each[i].slice(0,1);
    each[i] += first + "ay";
    each[i] = each[i].substring(1);  
  }
  return each.join(" ");
}
