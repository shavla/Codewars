var Sudoku = function(data){
  let N = data.length;
  let rootN = Math.floor(Math.sqrt(N));
  let isValidSubSudoku = function(leftX, leftY, size) {
    let sudokuTracker = {};
    for (let j = leftX; j < leftX+size; j++) {
      for (let k = leftY; k < leftY+size; k++) {
        if (typeof data[j][k] === 'number' && data[j][k] >= 1 && data[j][k] <= N) { 
          sudokuTracker[data[j][k]] = true;
        } else {
          return false;
        }
      }
    }
    return Object.keys(sudokuTracker).length === N;          
  }
  return {
    isValid: function() {
      if (rootN !== Math.sqrt(N)) { return false; }
      for (var r = 0; r < N; r+= rootN) {
        for (var c = 0; c < N; c+= rootN) {
          var isValid =  isValidSubSudoku(r, c, rootN);
          if (isValid === false) return false;
        }      
      }
      return true;
    }
  };
};
