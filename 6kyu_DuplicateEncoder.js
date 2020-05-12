function duplicateEncode(word){
 let string = "";
  let lowerCaseWord = word.toLowerCase();
  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (lowerCaseWord.indexOf(lowerCaseWord[i]) === lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
      string += "(";
    } else {
      string += ")";
    }
  }
  return string;
}
