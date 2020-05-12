function toCamelCase(str){
  if(str.length == 0) return "";
    if (str.includes("-")) {
    return str.split("-").map(function(word){
      if(str.split("-").indexOf(word) > 0) {
        return word.charAt(0).toUpperCase()+word.slice(1);
      } else {
        return word;
      }
    }).join("");
  } else {
    return str.split("_").map(function(word){
      if(str.split("_").indexOf(word) > 0) {
        return word.charAt(0).toUpperCase()+word.slice(1);
      } else {
        return word;
      }
    }).join("");
  }
}
