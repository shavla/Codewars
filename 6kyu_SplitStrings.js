function solution(str){
  let array = [];
  if(str == "") return [];
  if(str.length % 2 == 1) str += "_";
  for( let i = 0; i < str.length / 2; i++){
    array[i] = str.substring(i * 2, i * 2 + 2);
  }
  return array;
}
