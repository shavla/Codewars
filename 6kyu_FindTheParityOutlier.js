function findOutlier(integers){
  let one = Math.abs(integers[0] % 2);
  let two = Math.abs(integers[1] % 2);
    if(one == two){
      for(let i = 0; i < integers.length; i++){
        if(Math.abs(integers[i] % 2) != one) return integers[i]; 
      }
    }
    if(one != two){
      let three = Math.abs(integers[2] % 2);
      if(three == one) return integers[1]; 
      if(three == two) return integers[0]; 
    }
}
