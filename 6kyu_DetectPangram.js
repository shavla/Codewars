function isPangram(string){
  let alpha = string.toUpperCase().split("");
  for (let beta = 65; beta < 91; beta++) {
    let gamma = String.fromCharCode(beta);
    if (alpha.includes(gamma)) {
        continue;
    }
    else {
        return false;
    }
  }
  return true;
}
