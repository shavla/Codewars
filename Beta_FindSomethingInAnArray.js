var find = function(string, array) {
  for(let i = 0; i < array.length; i++){
    if(string === array[i]) return true;
  }
  return false;
};
