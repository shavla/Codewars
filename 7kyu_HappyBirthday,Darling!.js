function womensAge(n) {
  if(n % 2 == 0){
      return n + "? That's just 20, in base " + n/2 + "!";
  }else{
      return n + "? That's just 21, in base " + (n-1)/2 + "!";
  }
}
