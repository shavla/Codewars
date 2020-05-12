function boredom(staff){
  let obj = {
    accounts : 1,
    finance : 2,
    canteen : 10,
    regulation : 3,
    trading : 6,
    change : 6,
    IS : 8,
    retail : 5,
    cleaning : 4,
    pissing: 25
  }
  let sum = 0;
  for(let value of Object.values(staff)){
    if(value == 'pissing about') value = value.slice(0,7);
    sum += obj[value];
  }
  if(sum <= 80) return "kill me now";
  if(sum > 80 && sum < 100) return "i can handle this";
  if(sum >= 100) return "party time!!";
  
}
