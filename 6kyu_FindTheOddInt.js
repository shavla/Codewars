function findOdd(A) {
  let sum = 0;
  for(let i = 0; i < A.length; i++){
    for(let j = 0; j < A.length; j++){
      if(A[i] == A[j]) sum++;
    }
    if(sum % 2 !== 0) return A[i];
  }
}
