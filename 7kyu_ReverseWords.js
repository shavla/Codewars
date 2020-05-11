function reverseWords(str) {
  str = str.split(" ");
  str = str.map(i => i = i.split("").reverse().join(""));
  return str.join(" ");
}
