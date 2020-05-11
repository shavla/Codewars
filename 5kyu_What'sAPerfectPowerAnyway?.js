var isPP = function(n){
  let current = 2;
  let power = 2;
  let max = Math.floor(n / 2);
  while ( current <= max ) {
    power = 2;
    while ( Math.pow( current, power ) <= n ) {
      if ( n === Math.pow( current, power ) ) {
        return [ current, power ];
      } else {
        power += 1;
      }
    }
    current += 1;
  }

  return null;
}
