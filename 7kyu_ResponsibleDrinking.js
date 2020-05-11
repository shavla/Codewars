function hydrate(s) {
  let each = s.match(/\d/g);
  let sum = 0;
  for(let it of each){
    sum += +it;
  }
  return sum == 1? "1 glass of water" : sum + " glasses of water";
}
