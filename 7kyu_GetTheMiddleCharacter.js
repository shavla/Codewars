function getMiddle(s){
  let string = s.split("");
  if(string.length % 2 == 1) return string[(string.length - 1)/2];
  else return string[string.length/2 - 1]+string[string.length/2];
}
