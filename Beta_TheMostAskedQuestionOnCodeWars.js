function detect(comment) {
  let each = comment.split(" ");
  if(each[0] == "Can" && each[1] == "someone" && each[2] == "explain") return true;
  return false;
}
