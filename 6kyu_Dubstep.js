function songDecoder(song){
  let word = song.replace(/WUB/g, " ");
  let result = word.replace(/\s+/g, " ");
  if(result[0] == " ") result = result.slice(1);
  if(result[result.length - 1] == " ")  result = result.slice(0, -1);
  return result;
}
