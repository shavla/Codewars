function XO(str) {
    let each = str.split("");
    let x = 0;
    let o = 0;
    for(let i = 0; i < each.length; i++){
      if(each[i] == 'x' || each[i] == 'X') x++;
      if(each[i] == 'o' || each[i] == 'O') o++;
    }
    if(x == o) return true;
    return false;
}
