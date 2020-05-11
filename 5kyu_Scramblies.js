function scramble(str1, str2) {
  let letterHolder = {};
  for (let letter of str1) {
    if(letterHolder[letter]) letterHolder[letter]++;
    else letterHolder[letter] = 1;
  }
  for (let letter of str2) {
    if(!letterHolder[letter]) return false
    else letterHolder[letter]--;
  }
  return true;
}
