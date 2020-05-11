function century(year) {
  if(Number.isInteger(year / 100)){
    if(year.toString().length ==5) return Number(year.toString()[0]+year.toString()[1]+year.toString()[2]);
    if(year.toString().length ==6) return Number(year.toString()[0]+year.toString()[1]+year.toString()[2]+year.toString()[3]);
    return Number(year.toString()[0]+year.toString()[1]);
  }
  if(year < 100) return 1; 
  return Math.floor(year / 100) + 1;
}
