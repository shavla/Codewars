// return masked string
function maskify(cc) {
  if(cc.length <= 4) return cc;
  for( let  i = 0; i < cc.length - 4; i++){
    cc = cc.replace(cc[i],"#");
  }
  return cc;
}
