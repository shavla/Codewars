function differenceInAges(ages){
  ages.sort(function (a,b) {return a - b;});
  let result = [];
  result.push(ages[0]);
  result.push(ages[ages.length - 1]); 
  result.push(result[1] - result[0]);
  return result;
}
