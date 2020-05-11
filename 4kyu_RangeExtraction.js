function solution(list){
  let str = "";
  let count = 0;
  for(let i = 0; i < list.length; i++){
    if(list[i] + 1 == list[i + 1]){
      count++;
    }
    else{
      if(count == 0) str += list[i] + ",";
      else if(count == 1) {
        str += list[i-1] + "," + list[i] + ",";
        count = 0;
      }
      else{
        str += list[i - count] + "-" + list[i] + ",";
        count = 0;
      }
    }
  }
  return str.slice(0,-1);
}
