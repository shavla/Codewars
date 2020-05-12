function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let time = pontoonDistance/youSpeed;
  let k = time * sharkSpeed;
  if(k >= pontoonDistance + sharkDistance){
    if(dolphin){
      k = time * (sharkSpeed/2);
      if( k >= pontoonDistance + sharkDistance) return "Shark Bait!";
      else return "Alive!"; 
    }
    else{
      return "Shark Bait!";
    }
  }else{
    return "Alive!";
  }
}
