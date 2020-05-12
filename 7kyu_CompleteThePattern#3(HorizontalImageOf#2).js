function pattern(n){
 let output="";
 if(n < 1) return "";
 if(n == 1) return "1";

for(let i = n; i >= 1; i--){
  //output += i;
  for(let j = n; j >= i; j--){
      output += j;
    }
    if(i == 1) break;
    output += "\n"; 
}
 return output;
}
