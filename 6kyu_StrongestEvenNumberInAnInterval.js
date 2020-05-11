function strongestEven(n, m){
   let curr = n;
   for(let s = 1; curr + s <= m; s *= 2)
     if((curr + s) % (s * 2) === 0) curr += s;
   return curr;
}
