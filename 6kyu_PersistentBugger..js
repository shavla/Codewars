function persistence(num) {
   if(num < 10) return 0;
   let count = 1;
   let each = num.toString();
   let multiply = 1;
   while(true){
     for(let j = 0; j < each.length; j++){
       multiply = multiply * each[j];
     }
     if(multiply < 10) break;
     count++;
     each = multiply.toString();
     multiply = 1;
   }
   return count;
}
