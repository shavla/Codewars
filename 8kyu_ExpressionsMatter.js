function expressionMatter(a, b, c) {
  let max= Math.max(a+b+c,a*b+c,a+b*c,(a+b)*c,a*(b+c),a*b*c);
  return max;
}
