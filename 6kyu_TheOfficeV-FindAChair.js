function meeting(x, need){
  if(need == 0) return 'Game On';
  let sum = [];
  let sumInArr = 0;
  for(let i = 0; i < x.length; i++){
      let each = x[i][1] - x[i][0].length;
      if(each <= 0) {
        sum.push(0);
        continue;
      }
      sumInArr += each;
      if(sumInArr == need) {
        sum.push(each); 
        break;
      }
      if(sumInArr > need) {  
        sum.push(each + need - sumInArr);
        break;
      }
      sum.push(each);
  }
  if(sumInArr < need) return 'Not enough!';
  return sum;
}
