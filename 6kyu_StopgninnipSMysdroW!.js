function spinWords(str){
  let each =  str.split(" ");
  let result = "";
  for(let i = 0; i < each.length; i++){
    if(each[i].length > 4){
     let splitString = each[i].split(""); 
     let reverseArray = splitString.reverse();
     let joinArray = reverseArray.join("");
     result += joinArray + " ";
     continue;
    }
    result += each[i] + " ";
  }
  return result.slice(0,-1);
}
