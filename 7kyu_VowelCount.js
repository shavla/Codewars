function getCount(str) {
  let vowelsCount = 0;
  let word = str.split("");
  for(let i=0; i<word.length;i++){
    if(word[i]=="a" ||  word[i]=="e" ||word[i]=="i"|| word[i]=="o" ||word[i]=="u"){
      vowelsCount++;
    }
  }
  return vowelsCount;
}
