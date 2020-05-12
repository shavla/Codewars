function maxMultiple(divisor, bound){
  if(bound % divisor == 0) return bound;
  for ( let i = bound; i > divisor; i--){
    if( i % divisor == 0) return i;
    else continue;
  }
}
