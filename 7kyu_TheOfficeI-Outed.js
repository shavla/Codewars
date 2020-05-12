function outed(meet, boss){
  for (let value of Object.keys(meet)) {
    if(value == boss) {
       meet[value] *= 2;
     } 
  }
  let sum = 0;
  let size = 0;
  let result = 1;
  for(let name in meet){
    sum += meet[name];
    size++;
  }
  result = sum / size;
  if(result > 5) return "Nice Work Champ!";
  else return "Get Out Now!";
}
