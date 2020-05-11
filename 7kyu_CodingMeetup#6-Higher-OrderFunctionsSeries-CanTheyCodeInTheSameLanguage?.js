function isSameLanguage(list) {
  for(let i = 0; i < list.length - 1; i++){
    if(list[i].language != list[i + 1].language) return false;
  }
  return true;
}
