function longestConsec(strarr, k) {
    let longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      let tempArray = strarr.slice(i,i+k);
      let tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}
