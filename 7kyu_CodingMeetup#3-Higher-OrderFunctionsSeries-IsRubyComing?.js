function isRubyComing(list) {
  let bool = false;
  for(let it of list){
     if(it.language === 'Ruby') bool  = true;
   }
   return bool;
}
