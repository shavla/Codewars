function getSum( a,b ){
   let sum = 0;
   if(a>b){
     let c = a;
     a=b;
     b=c;
   }
   for(let  i = a; i <= b; i++){
     sum +=i;
   }
   return sum;
}
