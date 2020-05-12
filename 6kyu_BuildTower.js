function towerBuilder(nFloors) {
  let arr = [];
  let add = "";
  let s = "*";
  let space = " ";
  for(let i = 1; i <= nFloors; i++){
    for(let j = nFloors - i; j > 0; j--){
      add += space.repeat(j);
      break;
    }
    add += s.repeat(2 * i - 1);
    for(let k = nFloors - i; k > 0; k--){
      add += space.repeat(k);
      break;
    }
    arr.push(add);
    add = "";
  }
  return arr;
}
