function digPow(n, p){
    let sum = 0;
    let numStr = n.toString().split("");
    for(let  i = 0; i < numStr.length; i++){
      sum += Math.pow(+numStr[i], p + i);
    }
    if(sum % n == 0) return sum / n;
    else return -1;
}
