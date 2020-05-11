function bouncingBall(h,  bounce,  window) {
  if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let count = 1;
  for(let i = 1; i < h; i++){
    if(h * (bounce ** i) <= window) break;
    if(h * (bounce ** i)) count +=2;
  }
  return count;
}
