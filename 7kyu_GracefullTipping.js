function gracefulTipping(bill) {
  let full = bill + bill * 0.15;
  if(full <= 10) return Math.ceil(full);
  if(full > 10 && full <= 100) return Math.ceil(full/5)*5;
  if(full > 100 && full <= 1000) return Math.ceil(full/50)*50;
  if(full > 1000 && full <= 10000) return Math.ceil(full/500)*500;
  if(full > 10000 && full <= 100000) return Math.ceil(full/5000)*5000;
  if(full > 100000 && full <= 1000000) return Math.ceil(full/50000)*50000;
  if(full > 1000000 && full <= 10000000) return Math.ceil(full/500000)*500000;
  return full;
}
