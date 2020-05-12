function findUniq(arr) {
  if(arr[0] == arr[1]){
    for(let i = 0; i < arr.length; i++){
      if(arr[0] != arr[i]) return arr[i];
    }
  }
  if(arr[0] != arr[1]){
    if(arr[0] == arr[2]) return arr[1];
    if(arr[1] == arr[2]) return arr[0];
  }
}
