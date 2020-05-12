function lateRide(n) {
  if(n < 60){
     if(n >= 10) return Number(n.toString()[0]) + Number(n.toString()[1]);
     else return n;
  }
  if(n % 60 == 0){
    let num = n / 60;
    if(num >= 10) return Number(num.toString()[0]) + Number(num.toString()[1]);
    else return num;
  }
  let h = Math.floor(n / 60);
  let m = n - h * 60;
  if(h >= 10 && m >= 10) return Number(h.toString()[0]) + Number(h.toString()[1]) + Number(m.toString()[0]) + Number(m.toString()[1]);
  if(h > 10 && m <= 10) return Number(h.toString()[0]) + Number(h.toString()[1]) + Number(m.toString());
  if(m > 10 && h <= 10) return Number(h.toString()) + Number(m.toString()[0]) + Number(m.toString()[1]);
  else return Number(h.toString()) + Number(m.toString());
}
