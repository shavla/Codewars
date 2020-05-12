function sumTriangularNumbers(n) {
 if(n <= 0){
    return 0;
  }else{
  let one=0;
  let two = 0;
  let sum=0;
    for( let i =0; i<n; i++){
      one++;
      sum = sum + one*(one + 1)/2 ;
    }
    return sum;
  }
}
