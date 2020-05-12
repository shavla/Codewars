function pattern(n){
 let output="";
 if(n < 1) return "";
 if(n == 1) return "1";

  for(let i = 1; i <= n ; i++){
    for(let j = 1; j <= i ;j++){
      output += i ;
    }
    if(i == n) break;
    output += "\n"; 
  }
 return output;
}
