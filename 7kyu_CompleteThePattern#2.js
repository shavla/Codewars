function pattern(n){
 let output="";
 if(n < 1) return "";
 if(n == 1) return "1";

  for(let i = 1; i <= n; i++){
  //output += i;
    for(let j = n; j >= i; j--){
      output += j;
    }
    if(i == n) break;
    output += "\n"; 
  }
 return output;
}
