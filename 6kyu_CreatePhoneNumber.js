function createPhoneNumber(numbers){
  let str = "(";
  for(let i = 0; i < 3; i++){
    str += numbers[i]; 
  }
  str += ") ";
   for(let j = 3; j < 6; j++){
    str += numbers[j]; 
  }
  str += "-";
  for(let k = 6; k < numbers.length; k++){
    str += numbers[k]; 
  }
  return str;
}
