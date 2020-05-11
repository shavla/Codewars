function partsSums(ls) {
    let sum = ls.reduce((sum, n) => sum + n, 0)
    let res  = [sum];
    for(let i = 1; i <= ls.length; i++){
        sum -= ls[i-1];
        res.push(sum);
    }
    return res;
}
