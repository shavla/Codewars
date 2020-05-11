function whoIsNext(names, r){
  r -= 1; 
  while (r >= names.length) {
    r = Math.floor((r - names.length) / 2);
  }
  return names[r];
}
