function highAndLow(numbers){
  let each = numbers.split(" ");
  each.sort(function(a, b){return a - b});
  return each[each.length - 1] + " " + each[0];
}
