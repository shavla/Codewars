var number = function(busStops){
  let sum = 0;
  for(let item of busStops){
    sum += item[0];
    sum -= item[1];
  }
  return sum;
}
