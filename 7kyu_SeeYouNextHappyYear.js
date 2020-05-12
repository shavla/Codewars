function nextHappyYear(year){
  let result = 0;
  while(true){
   let isSame = false;
   year++;
   let whole = year.toString();
   let each = whole.split("");
   for(let i = 0; i < each.length; i++){
     for(let j = i + 1; j < each.length; j++){
       if(each[i] == each[j]) isSame = true;
     }
   }
   if(!isSame) break;
 } 
  return year;
}
