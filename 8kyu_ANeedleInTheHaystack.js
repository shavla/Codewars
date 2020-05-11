function findNeedle(haystack) {
  for(let it of haystack){
    if(it == "needle") return "found the needle at position " + haystack.indexOf(it);
  }
}
