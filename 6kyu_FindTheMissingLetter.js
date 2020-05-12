function findMissingLetter(array){
  let str = "";
  let a =[];
  for(let i = 0; i < array.length; i++){
    a.push(array[i].charCodeAt(0));
    if(a[i] != a[i-1] + 1) str = String.fromCharCode(a[i-1] + 1);
  }
  return str;
}
