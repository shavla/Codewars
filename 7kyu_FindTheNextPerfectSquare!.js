function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq))){
    let one = Math.sqrt(sq);
    return (one + 1) * (one + 1);
  }
  return -1;
}
