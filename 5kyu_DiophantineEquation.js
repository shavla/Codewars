function solequa(n) {
  let result = []
  for ( let d, x, y, i=1; i <= Math.sqrt(n); i++ ) {
    if ( Number.isInteger( d = n/i ) && Number.isInteger( x = (d+i)/2) && Number.isInteger( y = (d-i)/4)) {
      result.push([x,y]);
    }
  }
  return result;
}
