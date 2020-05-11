function comma(num) {
  let str = "";
  num = num.toString().split("").reverse().join("");
  for(let  i = 0; i < num. length; i++){
    if(i % 3 == 2){
      str += num[i] + ",";
      continue;
    }
    str += num[i];
  }
  let it = str.split("").reverse().join("");
  if(it[0] == ",") it = it.substring(1);
  return it;
}
