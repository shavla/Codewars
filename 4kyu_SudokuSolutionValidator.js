function validSolution(board){
  if(board[0][0] == 1) return false;
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 8; j++){
      for(let k = j + 1; k < 9; k++){
        if(board[i][j] == board[i][k]) return false;
        if(board[j][i] == board[k][i]) return false;
      }
    }
  }
  return true;
}
