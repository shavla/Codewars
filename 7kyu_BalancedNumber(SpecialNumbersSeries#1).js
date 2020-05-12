function balancedNum(n){
  if(n < 100) return "Balanced";
  let number = n.toString();
  //let separate = number.split("");
  
  let left = 0;
  let right = 0;
  
  if(number.length % 2 == 1){
    for(let i = 0; i < (number.length - 1)/2; i++){
      left += +number[i];
    }
    for(let j = (number.length + 1)/2; j < number.length; j++){
      right += +number[j];
    }
    if(left == right) return "Balanced";
    else return "Not Balanced";
  }if(number.length % 2 == 0){
    for(let i = 0; i < number.length/2 - 1; i++){
      left += +number[i];
    }
    for(let j = number.length/2 + 1; j < number.length; j++){
      right += +number[j];
    }
    if(left == right) return "Balanced";
    else return "Not Balanced";
  }
}
