function twosDifference(input){
  input = input.sort((a,b)=>a-b);
  let arr = [];
  for(let i = 0; i < input.length - 1; i++){
    
    for(let j = i + 1; j < input.length; j++){
      if(input[i] + 2 == input[j]){
      let it = [];
        it.push(input[i]);
        it.push(input[j]);
        arr.push(it);
      }
    }
  }
  return arr.sort(function(a,b){return a[0]-b[0]});
}
