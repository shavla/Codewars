function list(names){
  if(names.length == 0) return "";
  else if(names.length == 1) return String(Object.values(names[0]));
  else if(names.length == 2) return String(Object.values(names[0])+" & "+Object.values(names[1]));
  else{
    let result = ""; 
    for(let i = 0; i < names.length - 2; i++){
      result += String(Object.values(names[i])) + ", ";
    }
    result += String(Object.values(names[names.length - 2])+" & "+Object.values(names[names.length - 1]));
    return result;
  }
}
