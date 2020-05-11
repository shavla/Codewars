function tribonacci(signature,n){
  let triFib = [];
  triFib[0] = signature[0], triFib[1] = signature[1], triFib[2] = signature[2];
  for (let i = 3; i < n; i++) {
    triFib[i] = triFib[i-1] + triFib[i-2] + triFib[i-3];
  } 
  return (n < 3) ? signature.slice(0, n) : triFib;
}
