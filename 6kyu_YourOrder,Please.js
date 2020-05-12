function order(words){
  if(words == "") return "";
  let each = words.split(" ");
  each.sort(function(a,b) {
     for(let i = 0; i < a.length; i++){
       if(!isNaN(a[i])){
         a = a[i];
       }
     }
     for(let i = 0; i < b.length; i++){
       if(!isNaN(b[i])){
         b = b[i];
       }
     }
     return (a - b);
  });
  return each.join(" ");
}
