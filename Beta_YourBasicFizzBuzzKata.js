function fizzbuzz(n) {
  if(n % 3 != 0 && n % 5 != 0) return n;  
  if(n % 3 == 0 && n % 5 == 0) return "fizz buzz";
  if(n % 3 == 0) return "fizz";
  if(n % 5 == 0) return "buzz";
}
